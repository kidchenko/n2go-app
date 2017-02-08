import * as angular from 'angular';

import 'ng-csv';

import { DownloadCsvComponent } from './download-csv.component';

export const DownloadCsvModule = angular
  .module('downloadCsv', [
    'ngCsv',
  ])
  .component('downloadCsv', DownloadCsvComponent)
  .name;
