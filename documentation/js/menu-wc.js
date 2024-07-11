'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tab-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-f0f21d4458e9cb9db2c54e98917c788dd7d3ef8040120bb6b8ce860d3cf0dc86929b9dd8483451da7eee088cfca7f6905a4396152dbb7dc151a604d2287be236"' : 'data-bs-target="#xs-components-links-module-AppModule-f0f21d4458e9cb9db2c54e98917c788dd7d3ef8040120bb6b8ce860d3cf0dc86929b9dd8483451da7eee088cfca7f6905a4396152dbb7dc151a604d2287be236"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f0f21d4458e9cb9db2c54e98917c788dd7d3ef8040120bb6b8ce860d3cf0dc86929b9dd8483451da7eee088cfca7f6905a4396152dbb7dc151a604d2287be236"' :
                                            'id="xs-components-links-module-AppModule-f0f21d4458e9cb9db2c54e98917c788dd7d3ef8040120bb6b8ce860d3cf0dc86929b9dd8483451da7eee088cfca7f6905a4396152dbb7dc151a604d2287be236"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-9f50271d22b0f8e057a504bdf40bd2a9d5a496460796f2e9bcbe097571040055c76cbcb91dd80c802f2b3ccca8a9d64616dadd2ce375831daf3e34056aa6fb71"' : 'data-bs-target="#xs-components-links-module-CoreModule-9f50271d22b0f8e057a504bdf40bd2a9d5a496460796f2e9bcbe097571040055c76cbcb91dd80c802f2b3ccca8a9d64616dadd2ce375831daf3e34056aa6fb71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-9f50271d22b0f8e057a504bdf40bd2a9d5a496460796f2e9bcbe097571040055c76cbcb91dd80c802f2b3ccca8a9d64616dadd2ce375831daf3e34056aa6fb71"' :
                                            'id="xs-components-links-module-CoreModule-9f50271d22b0f8e057a504bdf40bd2a9d5a496460796f2e9bcbe097571040055c76cbcb91dd80c802f2b3ccca8a9d64616dadd2ce375831daf3e34056aa6fb71"' }>
                                            <li class="link">
                                                <a href="components/CoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreRoutingModule.html" data-type="entity-link" >CoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-8e1fdbae1dae6e4fb8c5c8bcc7a281dbdfa4c4e7c4eef8fcbc899663d95323650977d8cac52a23df90c49289e19622d53723e3381b73e0926172a5ae5f032f9f"' : 'data-bs-target="#xs-components-links-module-DashboardModule-8e1fdbae1dae6e4fb8c5c8bcc7a281dbdfa4c4e7c4eef8fcbc899663d95323650977d8cac52a23df90c49289e19622d53723e3381b73e0926172a5ae5f032f9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-8e1fdbae1dae6e4fb8c5c8bcc7a281dbdfa4c4e7c4eef8fcbc899663d95323650977d8cac52a23df90c49289e19622d53723e3381b73e0926172a5ae5f032f9f"' :
                                            'id="xs-components-links-module-DashboardModule-8e1fdbae1dae6e4fb8c5c8bcc7a281dbdfa4c4e7c4eef8fcbc899663d95323650977d8cac52a23df90c49289e19622d53723e3381b73e0926172a5ae5f032f9f"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DataTableModule.html" data-type="entity-link" >DataTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataTableModule-2925814287beb9520e59aa06eb6ad7f6f8b36995c0eab46f369ee55c999b72e9af6ca48de70ffb984bf498a3189f0537e61461dce90b3c8db939db80293d7977"' : 'data-bs-target="#xs-components-links-module-DataTableModule-2925814287beb9520e59aa06eb6ad7f6f8b36995c0eab46f369ee55c999b72e9af6ca48de70ffb984bf498a3189f0537e61461dce90b3c8db939db80293d7977"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTableModule-2925814287beb9520e59aa06eb6ad7f6f8b36995c0eab46f369ee55c999b72e9af6ca48de70ffb984bf498a3189f0537e61461dce90b3c8db939db80293d7977"' :
                                            'id="xs-components-links-module-DataTableModule-2925814287beb9520e59aa06eb6ad7f6f8b36995c0eab46f369ee55c999b72e9af6ca48de70ffb984bf498a3189f0537e61461dce90b3c8db939db80293d7977"' }>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-26245d5b6bf18f499b41f2a8948f80d3aa221d33b11d17557608f421a81177269fb5b25a065d6f8a156a11991c734adfa0cc658f452095ec4f5290f99a9be2ba"' : 'data-bs-target="#xs-components-links-module-HomeModule-26245d5b6bf18f499b41f2a8948f80d3aa221d33b11d17557608f421a81177269fb5b25a065d6f8a156a11991c734adfa0cc658f452095ec4f5290f99a9be2ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-26245d5b6bf18f499b41f2a8948f80d3aa221d33b11d17557608f421a81177269fb5b25a065d6f8a156a11991c734adfa0cc658f452095ec4f5290f99a9be2ba"' :
                                            'id="xs-components-links-module-HomeModule-26245d5b6bf18f499b41f2a8948f80d3aa221d33b11d17557608f421a81177269fb5b25a065d6f8a156a11991c734adfa0cc658f452095ec4f5290f99a9be2ba"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' : 'data-bs-target="#xs-components-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' :
                                            'id="xs-components-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' : 'data-bs-target="#xs-directives-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' :
                                        'id="xs-directives-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                        <li class="link">
                                            <a href="directives/DatePickerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' :
                                            'id="xs-pipes-links-module-SharedModule-44ee954a7e0b0dcdb8eae4c1abf8e1111f7a95e2d54db43a8df746af509fa9ea52b852622a54c27b46b68c4d63a86f3c7099bee3db318d93e1a159266c21a9b5"' }>
                                            <li class="link">
                                                <a href="pipes/EngToNepNumberPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EngToNepNumberPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LocalLangChangePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalLangChangePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-1a8a738660b905b2bc6dfa4aa85c8d5541313d30b4b5bb39a86afb252068a7f77fb4fcfe2ad6bde1e43a39c1bd24de83da3330748df4a8fed650e33e562745fa"' : 'data-bs-target="#xs-components-links-module-UserModule-1a8a738660b905b2bc6dfa4aa85c8d5541313d30b4b5bb39a86afb252068a7f77fb4fcfe2ad6bde1e43a39c1bd24de83da3330748df4a8fed650e33e562745fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-1a8a738660b905b2bc6dfa4aa85c8d5541313d30b4b5bb39a86afb252068a7f77fb4fcfe2ad6bde1e43a39c1bd24de83da3330748df4a8fed650e33e562745fa"' :
                                            'id="xs-components-links-module-UserModule-1a8a738660b905b2bc6dfa4aa85c8d5541313d30b4b5bb39a86afb252068a7f77fb4fcfe2ad6bde1e43a39c1bd24de83da3330748df4a8fed650e33e562745fa"' }>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/TranslateLoaderFactor.html" data-type="entity-link" >TranslateLoaderFactor</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonTranslateSubscriber.html" data-type="entity-link" >CommonTranslateSubscriber</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LangTranslateService.html" data-type="entity-link" >LangTranslateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NumericService.html" data-type="entity-link" >NumericService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffect.html" data-type="entity-link" >UserEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IActionList.html" data-type="entity-link" >IActionList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMangeColumns.html" data-type="entity-link" >IMangeColumns</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});