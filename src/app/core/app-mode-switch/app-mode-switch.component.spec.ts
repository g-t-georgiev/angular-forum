import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModeSwitchComponent } from './app-mode-switch.component';

describe('AppModeSwitchComponent', () => {
    let component: AppModeSwitchComponent;
    let fixture: ComponentFixture<AppModeSwitchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppModeSwitchComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppModeSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
