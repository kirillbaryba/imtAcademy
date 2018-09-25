import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        UserProfileComponent
    ],
    declarations: [
        UserProfileComponent
    ]
})
export class WidgetModule { }
