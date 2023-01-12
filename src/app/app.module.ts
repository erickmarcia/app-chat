import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { StudentListComponent } from './student-list/student-list.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NGX Pagination
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  // { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'chats', component: ChatsComponent, pathMatch: 'full' },
  // { path: 'register-student', component: AddStudentComponent },
  // { path: 'view-students', component: StudentListComponent },
  // { path: 'edit-student/:id', component: EditStudentComponent }
];

@NgModule({
  declarations: [AppComponent, ChatsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    // // NgxPaginationModule,
    // // ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
