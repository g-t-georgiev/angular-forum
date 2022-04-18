import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AppModeSwitchService {

    constructor(
        @Inject(DOCUMENT) document: Document
    ) { }
}