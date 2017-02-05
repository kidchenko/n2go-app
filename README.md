# Newsletter2go fe-test
Estimated time: ~4h
As a follow-up to your talk, here the test that we've prepared. There's no rush (from our side), so take your time finishing it and try to stay as close as possible to the specification below.

## Specification

> Imagine this is an MVP and additional features are already planned for the future. Try structuring the application in a way, that you can easily extend it when the time comes and reuse as much of the code you have already written for this MVP.
To solve the task you can use npm, gulp, bower, angular, ui-router, bootstrap. Good luck ;)

  - Create an app that displays all users (#/users) from  /data/users.json file, and a user details page (#/users/{id}). ok
  - The file should be fetched through ajax, and the data needs to be displayed inside a <table />. ok
  - The File should only be fetched once once the app starts. After that, we are working with users from memory. ok
  - The table row should be an Angular directive and each row needs to have checkboxs to select a row.
  - Every row needs to have 3 actions
       *  Show - modal that displays '{firstName} {lastName}, age:{calculateAgeHere}' (use https://angular-ui.github.io/bootstrap/#/modal)
       *  Delete - removes a user from the table
       *  Edit - Opens user detail page
   *  The table should display 10 items per page and needs to have previous-current-next buttons on the bottom.
   *  On the top of the table, place 2 buttons. The buttons are disabled while nothing is selected.
        * Delete - removes selected item(s)
        * Download - downloads marked item as a csv file (use ; as separator)
    * BONUS
        * Display the number of selected items.
        * On the detail page, enable edit of firstname and lastname, add validation and put save (save changes) and cancel (return to /user without saving) buttons.
        * If data was changed in the form and the user clicks "cancel", display a confirm modal with yes/no (https://angular-ui.github.io/bootstrap/#/modal)
