angular.module('app')
  .controller('teacherHomeCtrl', function teacherHomeCtrl($scope, $state, Class, Project ){

    // PROJECTS
    $scope.goToProject = function(projectId) {
      $state.go('teacherProject', {projectId: projectId})
    };

    $scope.getProjects = function() {
      Project.getProjects().then(function(projects){
        $scope.teacherProjects = projects;
      });
    };


    $scope.createProject = function(title, subject, author) {
      Project.createProject(title, subject, author).then(function(projectId){
        $scope.goToProject(projectId);
      });
    };



    // CLASSES
    $scope.getClasses = function() {
      Class.getClasses().then(function(classes){
        $scope.teacherClasses = classes;
      });
    };

    // $scope.createClass = function() {
    //   // todo: EXTRA
    // };
    
    $scope.goToClass = function(classId) {
      $state.go('teacherClass', {classId: classId})
    };

    $scope.assignProject = function() { /* associate project with student(s) */ };

    // $scope.getClasses();
    $scope.getProjects();


  });








// ******************************************************************************** //
        // trash:
// ******************************************************************************** //





// model: where we store all relavant data for this view

    // this is the array of current project for this teacher

/*

    $scope.teacherProjects = projectFactory.projects;

    // this is the array of current classes for this teacher
    $scope.teacherClasses = userFactory.classes;

    $scope.addProject = function() {
      // launch modal that gathers information about new project
      // Plourd: using prompts as temp fix until adding modal
      var title = window.prompt('What is the title of the project?');
      var subject = window.prompt('What is the subject of the project?');
      var author = window.prompt('Who is creating this project?');

      // add new information to current teacher's project data
      projectFactory.addProject(title, subject, author);
      
      // transition to 'teacherProject' view with new information
      $state.go('teacherProject');
    };

    $scope.editProject = function(index) {
      console.log('Edit this project:', $scope.teacherProjects[index]);
      // set the currentProjectId to index
      userFactory.currentProjectId = index;
      $state.go('teacherProject', {
        key: 'value'
      });
      // transition state to the selected projects edit view
    };

    $scope.assignToStudents = function() {
      console.log('Assign to students');
      // create dropdown menu that lets teacher select the students he/she wants
      // to add, then the due date
      // no transition, stay on screen
    };

    $scope.goToClass = function(selectedClass) {
      console.log('takes us to selected class');
      $state.go('teacherClass');
      // transition to selected class (aka 'teacherClassView')
    };
*/