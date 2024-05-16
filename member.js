// member.js

function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: SkillsMemberController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}

// Example controller for the directive
SkillsMemberController.$inject = ['$scope'];

function SkillsMemberController($scope) {
    var vm = this;

    // Initialize member skills (This could be populated from an API or service in a real application)
    vm.skills = [];

    // Watch for changes in the member object to fetch and update skills
    $scope.$watch('vm.member', function(newVal) {
        if (newVal) {
            // Fetch member skills (this could be an API call in a real application)
            vm.skills = fetchMemberSkills(newVal.id);
        }
    });

    // Simulated function to fetch member skills based on member ID
    function fetchMemberSkills(memberId) {
        // Simulated data; replace with actual data fetching logic
        const skillsDatabase = {
            1: ['JavaScript', 'React', 'Node.js'],
            2: ['Python', 'Django', 'Machine Learning'],
            3: ['Java', 'Spring', 'Microservices']
        };

        return skillsDatabase[memberId] || [];
    }
}

angular.module('yourModuleName')
    .directive('skillsMember', skillsMember);
