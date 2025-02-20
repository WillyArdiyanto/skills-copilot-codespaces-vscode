function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
        details: function() {
            console.log(this.name + ' has ' + this.skills.length + ' skills.');
        }
    }
    member.details();
}