/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeDirective } from "./materialize-directive";
var MaterializeModule = /** @class */ (function () {
    function MaterializeModule() {
    }
    /**
     * @return {?}
     */
    MaterializeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MaterializeModule
        };
    };
    MaterializeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MaterializeDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MaterializeDirective
                    ]
                },] },
    ];
    return MaterializeModule;
}());
export { MaterializeModule };
function MaterializeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MaterializeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MaterializeModule.ctorParameters;
}
