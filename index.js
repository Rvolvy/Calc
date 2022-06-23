function Welcome(){
  let Nama = prompt("Hallo, siapa nama anda?")
  alert(`Hallo ${Nama}, selamat datang di calculator`)
  document.getElementById("nama").innerHTML = `Nama: ${Nama}`
}

function Tambah(){
  document.form.screen.value += '+'
}

function Kurang(){
  document.form.screen.value += '-'
}

function Kali(){
  document.form.screen.value += '*'
}

function Bagi(){
  document.form.screen.value += '/'
}

function Hapus(){
  let hasil = document.form.screen.value
  document.form.screen.value = hasil.substring(0, hasil.length-1)
}

function Samadengan(){
  document.form.screen.value = eval(document.form.screen.value)
}

function Bersih(){
  document.form.screen.value = ''
}