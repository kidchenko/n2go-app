import * as angular from 'angular';

import { DownloadCsvModule } from './download-csv';

export const ComponentsModule = angular
  .module('app.components', [
    DownloadCsvModule
  ])
  .name;
