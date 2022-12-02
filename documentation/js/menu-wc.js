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
                    <a href="index.html" data-type="index-link">ngx-json-schema-gen documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxJsonSchemaGenModule.html" data-type="entity-link" >NgxJsonSchemaGenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxJsonSchemaGenModule-17962fda88c2939d04752b9fdb95381c91baddbfac75b9aa618fb58c870d67fc937bec111b82cdf60a916382534775326502494ae08dfd7c1fe63f7eee3c5dc5"' : 'data-target="#xs-components-links-module-NgxJsonSchemaGenModule-17962fda88c2939d04752b9fdb95381c91baddbfac75b9aa618fb58c870d67fc937bec111b82cdf60a916382534775326502494ae08dfd7c1fe63f7eee3c5dc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxJsonSchemaGenModule-17962fda88c2939d04752b9fdb95381c91baddbfac75b9aa618fb58c870d67fc937bec111b82cdf60a916382534775326502494ae08dfd7c1fe63f7eee3c5dc5"' :
                                            'id="xs-components-links-module-NgxJsonSchemaGenModule-17962fda88c2939d04752b9fdb95381c91baddbfac75b9aa618fb58c870d67fc937bec111b82cdf60a916382534775326502494ae08dfd7c1fe63f7eee3c5dc5"' }>
                                            <li class="link">
                                                <a href="components/NgxJsonSchemaGenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxJsonSchemaGenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/JSONSchema.html" data-type="entity-link" >JSONSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONSchemaArray.html" data-type="entity-link" >JSONSchemaArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONSchemaInfo.html" data-type="entity-link" >JSONSchemaInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONSchemaObject.html" data-type="entity-link" >JSONSchemaObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONSchemaProp.html" data-type="entity-link" >JSONSchemaProp</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONSchemaSimple.html" data-type="entity-link" >JSONSchemaSimple</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NgxJsonSchemaGenService.html" data-type="entity-link" >NgxJsonSchemaGenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});