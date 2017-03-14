import { ElementRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { MentionListComponent } from './mention-list.component';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
export declare class MentionDirective {
    private _element;
    private _componentResolver;
    private _viewContainerRef;
    items: any;
    startPos: number;
    startNode: any;
    searchList: MentionListComponent;
    stopSearch: boolean;
    iframe: any;
    constructor(_element: ElementRef, _componentResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef);
    triggerChar: string;
    asyncSearch: boolean;
    mention: any;
    callbackFn: Function;
    scope: any;
    mentionSelect: (selection: string) => (string);
    setIframe(iframe: HTMLIFrameElement): void;
    stopEvent(event: any): void;
    blurHandler(event: any): void;
    keyHandler(event: any, nativeElement?: HTMLInputElement): boolean;
    showSearchList(nativeElement: HTMLInputElement): void;
    searchAsync(callbackFn: Function, token: string): void;
}