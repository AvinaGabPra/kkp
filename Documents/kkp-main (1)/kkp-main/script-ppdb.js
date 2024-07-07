document.getElementById("tambah").addEventListener("click", function () {
  const educationContainer = document.getElementById("education-container");
  const newEducationEntry = document.createElement("div");
  newEducationEntry.classList.add("education-entry");
  newEducationEntry.innerHTML = `
      <div class="col-sm-3">
        <div class="form-group">
          <label>Jenjang Pendidikan :</label>
          <select class="form-control" name="pendidikan[]">
            <option disabled selected>Pilih</option>
            <option value="SD">TK</option>
            <option value="SMP">SD</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>Asal Sekolah :</label>
            <input type="text" name="asal_sekolah[]" class="form-control" placeholder="Masukkan Asal Sekolah" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Alamat Sekolah :</label>
              <textarea class="form-control" name="alamat_sekolah[]" rows="2"></textarea>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form-group">
              <label>Akreditasi Sekolah :</label>
              <select class="form-control" name="akreditasi[]">
                <option disabled selected>Pilih</option>
                <option value="A">A (Amat Baik)</option>
                <option value="B">B (Baik)</option>
                <option value="C">C (Cukup)</option>
                <option value="D">Tidak Terakreditasi</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label>Tahun Lulus :</label>
            <input type="text" name="lulusan[]" class="form-control" placeholder="Tahun Lulus" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Rata-Rata Nilai Rapor :</label>
            <input type="text" name="nilai_raport[]" class="form-control" placeholder="Masukkan Rata-Rata Nilai Rapor" />
          </div>
        </div>
      </div>
    `;
  educationContainer.appendChild(newEducationEntry);
});

document.getElementById("tambah").addEventListener("click", function () {
  // Clone the education entry
  var educationEntry = document
    .querySelector(".education-entry")
    .cloneNode(true);

  // Disable the "Tambah" button
  this.disabled = true;
});

// ALAMAT RUMAH IBU KANDUNG
// Mendapatkan elemen checkbox dan input alamat ibu
const checkboxAlamat = document.getElementById("check_alamat");
const inputAlamatIbu = document.querySelector(
  'textarea[name="alamat_rumah_ibu"]'
);

// Mendapatkan nilai dari input alamat ayah
const inputAlamatAyah = document.querySelector(
  'textarea[name="alamat_rumah_ayah"]'
);
let alamatAyah = "";

inputAlamatAyah.addEventListener("input", function () {
  alamatAyah = inputAlamatAyah.value;
});

// Menambahkan event listener untuk checkbox
checkboxAlamat.addEventListener("change", function () {
  if (checkboxAlamat.checked) {
    // Jika checkbox dicentang, isi alamat ibu dengan alamat ayah dan nonaktifkan input
    inputAlamatIbu.value = alamatAyah;
    inputAlamatIbu.disabled = true;
  } else {
    // Jika checkbox tidak dicentang, aktifkan kembali input alamat ibu
    inputAlamatIbu.value = ""; // Kosongkan kembali nilai input jika diperlukan
    inputAlamatIbu.disabled = false;
  }
});
function savePDF() {
  const options = {
    scale: 2,
    useCORS: true,
    allowTaint: true,
  };
}
function pagePrint(form) {
  var printdata = document.getElementById("form");
  newwin = window.open("");
  newwin.document.write(printdata.outerHTML);
  newwin.print();
  newwin.close();
}
