import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  user$: Observable<any> | undefined;

  constructor(
    private auth: Auth,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap((user) => {
        if (!user) throw new Error('Not Authenticated');

        return updateProfile(user, profileData);
      })
    );
  }

  logout() {
    return from(this.auth.signOut());
  }

  /**Nuevo */
  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private async oAuthLogin(provider: any) {
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }
}
