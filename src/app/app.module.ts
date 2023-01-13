import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { StudentListComponent } from './student-list/student-list.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGX Pagination
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { LandingComponent } from './components/landing/landing.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { HotToastModule } from '@ngneat/hot-toast';
// import { MatMenuModule } from '@angular/material/menu';
// import { ProfileComponent } from './components/profile/profile.component';

import { MatListModule } from '@angular/material/list';
import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { DateDisplayPipe } from './pipes/date-display.pipe';
// import { TimeAgoPipe } from 'time-ago-pipe';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

// Routes array define component along with the path name for url
const routes: Routes = [
  // { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'chats', component: ChatsComponent, pathMatch: 'full' },
  // { path: 'register-student', component: AddStudentComponent },
  // { path: 'view-students', component: StudentListComponent },
  // { path: 'edit-student/:id', component: EditStudentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    // LoginComponent,
    // HomeComponent,
    // LandingComponent,
    // SignUpComponent,
    // ProfileComponent,
    // DateDisplayPipe,
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // // AngularFireModule.initializeApp(environment.firebaseConfig),
    // // AngularFireDatabaseModule,
    // // AngularFirestoreModule,
    // BrowserAnimationsModule, // required animations module
    // // // NgxPaginationModule,
    // // // ToastrModule.forRoot(),
    RouterModule.forRoot(routes),

    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    // HotToastModule.forRoot(),
    // MatMenuModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
