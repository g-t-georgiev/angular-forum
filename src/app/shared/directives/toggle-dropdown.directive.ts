import { DOCUMENT } from '@angular/common';
import { 
    Directive, 
    AfterViewInit, 
    OnDestroy, 
    Output, 
    Inject, 
    EventEmitter 
} from '@angular/core';

@Directive({
    selector: '[appToggleDropdown]'
})
export class ToggleDropdownDirective implements AfterViewInit, OnDestroy {

    @Output('on-target') click = new EventEmitter<boolean>();

    private unsubscribe!: Function;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    ngAfterViewInit(): void {
        this.unsubscribe = this.outsideClickEventListener();
    }

    ngOnDestroy(): void {
        this.unsubscribe?.();
    }

    private outsideClickEventListener(): Function {
        const eventHandler = (ev: MouseEvent | PointerEvent) => {
            const targetElem = ev.target as HTMLElement;

            const isDropdownClicked = (
                targetElem?.classList.contains('dropdown') ||
                targetElem?.classList.contains('dropdown__field') || 
                targetElem?.classList.contains('dropdown__options') || 
                targetElem?.classList.contains('dropdown__option')
            );
            
            this.click.emit(isDropdownClicked);
        };

        this.document.body?.addEventListener('click', eventHandler);

        return () => {
            this.document.body?.removeEventListener('click', eventHandler);
        };
    }

}