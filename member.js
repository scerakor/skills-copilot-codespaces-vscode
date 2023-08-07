function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.replace(/\s/g, '');
    var member = member.replace(/[^a-zA-Z ]/g, "");
    var member = member.replace(/\s\s+/g, ' ');
    var member = member.replace(/ /g, '-');
    var member = member.replace(/-+/g, '-');
    var member = member.replace(/^-+/, '');
    var member = member.replace(/-+$/, '');
    var member = member.replace(/-+/g, '-');
    var member = member.replace(/-+$/, '');
    document.getElementById("member").value = member;
}

