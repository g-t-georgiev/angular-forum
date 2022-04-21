import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThemeSwitchComponent } from './app-theme-switch.component';

describe('AppThemeSwitchComponent', () => {
    let component: AppThemeSwitchComponent;
    let fixture: ComponentFixture<AppThemeSwitchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppThemeSwitchComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppThemeSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
