const firstNameParts = ['Abi','Gowsi','Dilshan','Dilakshan','Kajenthini','Nirusan','Sayi','Saki','Dayani','Raam','Aara','Athavan','Aji','Kathu','Raza'];
//const otherNamePartsNonVowel = ['sa','si'];

$("#newname").click(function () {
  const numNameParts = _.random(1, 4);
  var randName = firstNameParts[_.random(0, firstNameParts.length - 1)];
  for (var i = 0; i < numNameParts; i++) {
    var newNamePart = "";
    if (/[^aeiou]/.test(randName[randName.length - 1])) {
      newNamePart = otherNamePartsNonVowel[_.random(0, otherNamePartsNonVowel.length - 1)];
    } else {
     //   newNamePart = otherNamePartsVowel[_.random(0, otherNamePartsVowel.length - 1)];
    }
       randName += newNamePart;
  }
  $("#name").html(randName);
});