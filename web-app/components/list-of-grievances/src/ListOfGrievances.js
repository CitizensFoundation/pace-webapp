import { html, css, LitElement } from 'lit-element';
import { Data } from '../../your-grievances-app/src/data.js';
import { ShadowStyles } from '../../your-grievances-app/src/shadow-styles.js';

import './Grievance.js';
import { BaseElement } from '../../your-grievances-app/src/baseElement.js';

export class ListOfGrievances extends BaseElement {
  static get styles() {
    return [
      ShadowStyles,
      css`
        :host {
          --page-one-text-color: #000;

          padding: 25px;
          color: var(--page-one-text-color);
        }

        .mdc-card {
          max-width: 850px;
          padding: 16px;
          background-color: #fff;
          margin-bottom: 32px;
        }
        .content {
          padding: 1rem;
        }
        .subtext {
          color: rgba(0, 0, 0, 0.54);
        }

        .group-spaced {
          justify-content: space-around;
        }

        .group-spaced > * {
          margin: 0 8px;
        }

        .container {
          display: flex;
          flex-direction: column;
          flex-basis: auto;
          width: 100%;
        }

        .contentText {
          font-size: 16px !important;
        }

        .contentTitle {
          font-size: 20px;
          margin-top: 0;
        }

        a {
          color: rgba(0, 0, 0, 0.54);
        }
      `,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  renderIntro() {
    return html`
      <div class="mdc-card shadow-animation shadow-elevation-3dp" @click="${this._openGrievance}">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
          <div class="content">
            <h2 class="mdc-typography--title contentTitle">Introduction to the PaCE Dashboard</h2>
            <div class="mdc-typography--body1 subtext contentText">
              Here you see relative trends between different topics connected to populism, nativism
              and civic engagement. We use
              <a href="https://commoncrawl.org/" target="_blank">CommonCrawl</a>, where we search for keywords in full
              web crawls from every year from 2013 for hundreds of keywords that are then filtered
              through BERT based AI algorithms that have been trained to recognize the different
              topics. There is
              <a
                targer="_blank"
                href="https://docs.google.com/document/d/1-C6GJAy3GCl7nO_HUyaKKk07x5ydMAMMLMGESwIdtpk"
                >more detailed information here.</a
              > The PaCE Dashboard is a part of the Horizon 2020 funded <a href="https://popandce.eu/" target="_blank">Populism and Civic Enagment project.</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCitizensEngagment() {
    return html``;
  }

  render() {
    return html`
      <div class="container">
        ${this.renderIntro()}
        ${Data.map(item =>
          item.topic == 'Citizen engagment'
            ? html`
                ${this.renderCitizensEngagment()}
                <one-grievance .grievanceData="${item}"></one-grievance>
              `
            : html`
                <one-grievance .grievanceData="${item}"></one-grievance>
              `,
        )}
      </div>
    `;
  }
}
