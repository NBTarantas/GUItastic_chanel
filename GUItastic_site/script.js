function sayHi() {
    var confDialog = window.confirm("Хочете поділитись посиланням на цю сторінку?")
  if (confDialog)
   window.alert("Чудово!")
  else
   window.alert("Погано :(")
}

setTimeout(sayHi, 10099);
