function skillsMember() {
    return{
        restrict: `E`,
        templateuRL :'modules/skills/views/member.html',
        controller :'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:  {
            member: 'm'
        }
    }
}
