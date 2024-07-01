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
                                            'data-bs-target="#components-links-module-AppModule-ddda36e5c9ba37e4255b88902aed7aee903dd5841bf7199fad9547019b95b90a1d887c88360973deb0f6927e64ae4b4f905f1763d401a746eb9f9f5fd23c862b"' : 'data-bs-target="#xs-components-links-module-AppModule-ddda36e5c9ba37e4255b88902aed7aee903dd5841bf7199fad9547019b95b90a1d887c88360973deb0f6927e64ae4b4f905f1763d401a746eb9f9f5fd23c862b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ddda36e5c9ba37e4255b88902aed7aee903dd5841bf7199fad9547019b95b90a1d887c88360973deb0f6927e64ae4b4f905f1763d401a746eb9f9f5fd23c862b"' :
                                            'id="xs-components-links-module-AppModule-ddda36e5c9ba37e4255b88902aed7aee903dd5841bf7199fad9547019b95b90a1d887c88360973deb0f6927e64ae4b4f905f1763d401a746eb9f9f5fd23c862b"' }>
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
                                            'data-bs-target="#components-links-module-CoreModule-9ad376c865cf0212a2a0820189667f1b134f58eb33f358334c3d61f6b73759272d07855c858acfeb5cd6b33ca5bbfc4088d36bfe33bd8368b7e2232887b096aa"' : 'data-bs-target="#xs-components-links-module-CoreModule-9ad376c865cf0212a2a0820189667f1b134f58eb33f358334c3d61f6b73759272d07855c858acfeb5cd6b33ca5bbfc4088d36bfe33bd8368b7e2232887b096aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-9ad376c865cf0212a2a0820189667f1b134f58eb33f358334c3d61f6b73759272d07855c858acfeb5cd6b33ca5bbfc4088d36bfe33bd8368b7e2232887b096aa"' :
                                            'id="xs-components-links-module-CoreModule-9ad376c865cf0212a2a0820189667f1b134f58eb33f358334c3d61f6b73759272d07855c858acfeb5cd6b33ca5bbfc4088d36bfe33bd8368b7e2232887b096aa"' }>
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
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-ac6d0c0fa913853cb2c9de08f1976bb5304b2727ce8eab1a6eb294896e83efd045d43616d03b6a971643e4f730cc2c26662de676a9235202718dbe706e743e14"' : 'data-bs-target="#xs-components-links-module-HomeModule-ac6d0c0fa913853cb2c9de08f1976bb5304b2727ce8eab1a6eb294896e83efd045d43616d03b6a971643e4f730cc2c26662de676a9235202718dbe706e743e14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ac6d0c0fa913853cb2c9de08f1976bb5304b2727ce8eab1a6eb294896e83efd045d43616d03b6a971643e4f730cc2c26662de676a9235202718dbe706e743e14"' :
                                            'id="xs-components-links-module-HomeModule-ac6d0c0fa913853cb2c9de08f1976bb5304b2727ce8eab1a6eb294896e83efd045d43616d03b6a971643e4f730cc2c26662de676a9235202718dbe706e743e14"' }>
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
                                            'data-bs-target="#components-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' : 'data-bs-target="#xs-components-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' :
                                            'id="xs-components-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' }>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' : 'data-bs-target="#xs-directives-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' :
                                        'id="xs-directives-links-module-SharedModule-152965045f939e35594c4873d8d382c11e68f5390255b0d67823790912d5d95d960bab21ad9c308456e3e1dc68773beec5e0d0fb9f83917b7329fb9a8a249eb3"' }>
                                        <li class="link">
                                            <a href="directives/DatePickerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-e0ebf21aa9d440644de2f696d6e598505c9c55a319d0ce22808372697c8b366e3055743655a31a6b721f4372ed4af16494b31add6ba1a5611fb1a59e94ab4d39"' : 'data-bs-target="#xs-components-links-module-UserModule-e0ebf21aa9d440644de2f696d6e598505c9c55a319d0ce22808372697c8b366e3055743655a31a6b721f4372ed4af16494b31add6ba1a5611fb1a59e94ab4d39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-e0ebf21aa9d440644de2f696d6e598505c9c55a319d0ce22808372697c8b366e3055743655a31a6b721f4372ed4af16494b31add6ba1a5611fb1a59e94ab4d39"' :
                                            'id="xs-components-links-module-UserModule-e0ebf21aa9d440644de2f696d6e598505c9c55a319d0ce22808372697c8b366e3055743655a31a6b721f4372ed4af16494b31add6ba1a5611fb1a59e94ab4d39"' }>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
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