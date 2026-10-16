import{r as m,R as ee,j as t}from"./vendor-react-Cq2hLklJ.js";import{a as te,c as ae}from"./SharedComponents-pItnAntt.js";import{f as le}from"./formatGelar-Cp7EOyYk.js";import{aA as W,a$ as ne,aC as se,a_ as ie,r as re}from"./vendor-icons-C7O07IFo.js";const M=(a,f,w)=>le(a,f,w),oe=(a,f,w)=>{if(!a)return;const _=new Date().getFullYear(),L=a.tahun_pelajaran||`${_}/${_+1}`,T=(a.tahun_pelajaran?a.tahun_pelajaran.split("/")[0]:"")||String(_),S=n=>n?n.split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" "):"",y=n=>["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][n],u=new Date,g=`${S(a.sekolah?.kota||"Tangerang").replace(/^Kota /i,"")}, &nbsp;&nbsp;&nbsp;&nbsp; ${y(u.getMonth())} ${u.getFullYear()}`,k=a.tingkatAggr?.reduce((n,o)=>n+o.count,0)||0,$=()=>a.sekolah?.kop_surat_url?`<div style="margin-bottom: 20px; width: 100%;">
                <img src="${a.sekolah.kop_surat_url}" alt="Kop Surat" style="width: 100%; height: auto; display: block;" />
            </div>`:`
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #000; padding-bottom: 12px; margin-bottom: 24px;">
                <div style="width: 85px; flex-shrink: 0; text-align: center;">
                    ${a.sekolah?.logo_url?`<img src="${a.sekolah.logo_url}" alt="Logo" style="width: 80px; height: 80px; object-fit: contain; display: block; margin: 0 auto;" />`:""}
                </div>
                <div style="flex: 1; text-align: center; padding: 0 10px;">
                    <h1 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">PEMERINTAH ${a.sekolah?.kota||"KOTA TANGERANG"}</h1>
                    <h2 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">DINAS PENDIDIKAN</h2>
                    <h3 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">${a.sekolah?.status_sekolah==="Swasta"?"":"UPT. SATUAN PENDIDIKAN "}${a.sekolah?.school_name||"SD NEGERI TANAH TINGGI 1"}</h3>
                    <h4 style="font-size: 11pt; font-weight: bold; text-transform: uppercase; margin: 0 0 4px 0;">KECAMATAN ${a.sekolah?.kecamatan||"TANGERANG"}</h4>
                    <p style="font-size: 8.5pt; margin: 0 0 2px 0;">NPSN : ${a.sekolah?.npsn||"-"}, NSS : -</p>
                    <p style="font-size: 8.5pt; margin: 0 0 2px 0;">${a.sekolah?.contact_address||"Jl. Daan Mogot No. 1/13 Tanah Tinggi Tangerang"}, Telp ${a.sekolah?.contact_phone||"-"}</p>
                    <p style="font-size: 8.5pt; text-transform: uppercase; letter-spacing: 0.2em; margin: 0;">${(a.sekolah?.kota||"Tangerang").replace(/^Kota /i,"")}</p>
                </div>
                <div style="width: 85px; flex-shrink: 0;"></div>
            </div>
        `;let N=document.getElementById("rombel-print-iframe");N&&N.remove();const s=document.createElement("iframe");s.id="rombel-print-iframe",s.style.position="fixed",s.style.right="0",s.style.bottom="0",s.style.width="0",s.style.height="0",s.style.border="0",s.style.zIndex="-1",document.body.appendChild(s);const d=s.contentWindow?.document||s.contentDocument;if(!d){window.print(),w?.();return}const A=(a.rombels||[]).map((n,o)=>{const p=parseInt(n.count_l)||0,C=parseInt(n.count_p)||0,G=n.wali_kelas_name?M(n.gelar_depan,n.wali_kelas_name,n.gelar_belakang):"",D=/^kelas /i.test(n.name)?n.name:"Kelas "+n.name;return`
            <tr>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${o+1}</td>
                <td style="border: 1px solid #000; padding: 4px 8px; text-align: left;">${D}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${p}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${C}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center; font-weight: bold;">${p+C}</td>
                <td style="border: 1px solid #000; padding: 4px 8px; text-align: left; text-transform: uppercase;">${G}</td>
            </tr>
        `}).join(""),b=a.rombels?.reduce((n,o)=>n+(parseInt(o.count_l)||0),0)||0,P=a.rombels?.reduce((n,o)=>n+(parseInt(o.count_p)||0),0)||0,K=b+P,R=(a.tingkatAggr||[]).map(n=>`
        <tr>
            <td style="width: 120px; padding: 2px 0;">Kelas ${n.tingkat}</td>
            <td style="width: 15px; padding: 2px 0;">:</td>
            <td style="padding: 2px 0;">${n.count} Rombel</td>
        </tr>
    `).join(""),I=a.kepsek?a.kepsek.fullName||M(a.kepsek.gelar_depan,a.kepsek.nama||a.kepsek.nama_lengkap,a.kepsek.gelar_belakang):".....................................................",E=a.pengawas?a.pengawas.fullName||M(a.pengawas.gelar_depan,a.pengawas.nama||a.pengawas.nama_lengkap,a.pengawas.gelar_belakang):".....................................................";d.open(),d.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>Surat Keterangan Rombongan Belajar</title>
            <style>
                @page {
                    size: A4 portrait;
                    margin: 15mm 15mm 15mm 15mm;
                }
                * {
                    box-sizing: border-box;
                }
                html, body {
                    background: #ffffff !important;
                    color: #000000 !important;
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 11pt;
                    line-height: 1.35;
                    margin: 0;
                    padding: 0;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                .page-break {
                    page-break-before: always !important;
                    break-before: page !important;
                }
                .page-container {
                    width: 100%;
                    background: white;
                    padding: 0;
                }
                table {
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
            <!-- HALAMAN 1 -->
            <div class="page-container">
                ${$()}
                
                <div style="text-align: center; margin-bottom: 24px;">
                    <h2 style="font-size: 12.5pt; font-weight: bold; text-decoration: underline; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px 0;">SURAT KETERANGAN ROMBEL</h2>
                    <p style="font-size: 11pt; margin: 0;">No. ${f||"..........................................."}</p>
                </div>

                <div style="text-align: justify; font-size: 11pt; line-height: 1.4; margin-bottom: 20px; padding: 0 10px;">
                    <p style="margin-bottom: 12px;">Yang bertanda tangan di bawah ini :</p>
                    
                    <table style="width: 100%; margin-bottom: 16px; margin-left: 20px;">
                        <tbody>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">N a m a</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0; font-weight: bold;">${I}</td>
                            </tr>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">NIP</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0;">${a.kepsek?.nip||"-"}</td>
                            </tr>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">Jabatan</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0;">Kepala ${a.sekolah?.school_name||"SDN Tanah Tinggi 1"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p style="text-indent: 30px; margin-bottom: 12px;">
                        Dengan ini menerangkan bahwa keadaan Rombongan Belajar (Rombel) di ${a.sekolah?.school_name||"SDN Tanah Tinggi 1"} Tahun Pelajaran ${L} yaitu ${k} rombel dengan rincian sebagai berikut :
                    </p>
                    
                    <div style="margin-left: 50px; margin-bottom: 16px;">
                        <table style="width: 70%;">
                            <tbody>
                                ${R}
                                <tr>
                                    <td style="width: 120px; padding: 4px 0; font-weight: bold;">Jumlah</td>
                                    <td style="width: 15px; padding: 4px 0; font-weight: bold;">:</td>
                                    <td style="padding: 4px 0; font-weight: bold;">${k} Rombel</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style="text-indent: 30px; margin-bottom: 0;">
                        Demikian keterangan ini dibuat, sebagai kelengkapan data usulan Insentif Tenaga Pendidik dan Kependidikan ${S(a.sekolah?.kota||"Kota Tangerang")} Tahun Anggaran ${T}.
                    </p>
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 40px; font-size: 11pt; padding: 0 10px;">
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">Mengetahui,</p>
                        <p style="margin: 0 0 65px 0;">Pengawas Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${E}</p>
                        <p style="margin: 0;">NIP. ${a.pengawas?.nip||"-"}</p>
                    </div>
                    
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">${g}</p>
                        <p style="margin: 0 0 65px 0;">Yang membuat pernyataan</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${I}</p>
                        <p style="margin: 0;">NIP. ${a.kepsek?.nip||"-"}</p>
                    </div>
                </div>
            </div>

            <!-- HALAMAN 2 -->
            <div class="page-break"></div>
            <div class="page-container" style="padding-top: 10px;">
                ${$()}
                
                <div style="text-align: center; margin-bottom: 16px;">
                    <h2 style="font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 2px 0;">JUMLAH SISWA DAN ROMBONGAN BELAJAR</h2>
                    <h2 style="font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">TAHUN PELAJARAN ${L}</h2>
                </div>

                <table style="width: 100%; border: 1px solid #000; font-size: 9.5pt; text-align: center; margin-bottom: 20px;">
                    <thead>
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #000; padding: 4px 4px; width: 35px;" rowspan="2">NO</th>
                            <th style="border: 1px solid #000; padding: 4px 8px;" rowspan="2">NAMA ROMBEL</th>
                            <th style="border: 1px solid #000; padding: 3px 6px;" colspan="3">JENIS KELAMIN</th>
                            <th style="border: 1px solid #000; padding: 4px 8px;" rowspan="2">WALI KELAS</th>
                        </tr>
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #000; padding: 3px 6px; width: 40px;">L</th>
                            <th style="border: 1px solid #000; padding: 3px 6px; width: 40px;">P</th>
                            <th style="border: 1px solid #000; padding: 3px 6px; width: 45px;">JML</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${A}
                        <tr style="background-color: #f2f2f2; font-weight: bold;">
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;" colspan="2">JUMLAH</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${b}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${P}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${K}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px;"></td>
                        </tr>
                    </tbody>
                </table>

                <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 11pt; padding: 0 10px;">
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">Mengetahui,</p>
                        <p style="margin: 0 0 65px 0;">Pengawas Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${E}</p>
                        <p style="margin: 0;">NIP. ${a.pengawas?.nip||"-"}</p>
                    </div>
                    
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">${g}</p>
                        <p style="margin: 0 0 65px 0;">Kepala Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${I}</p>
                        <p style="margin: 0;">NIP. ${a.kepsek?.nip||"-"}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `),d.close();const j=()=>{try{s.contentWindow?.focus(),s.contentWindow?.print()}catch(n){console.error("Iframe print error:",n),window.print()}finally{setTimeout(()=>{s.remove(),w?.()},1e3)}},x=d.images;if(x.length>0){let n=0;const o=()=>{n++,n>=x.length&&setTimeout(j,250)};for(let p=0;p<x.length;p++)x[p].complete?n++:(x[p].onload=o,x[p].onerror=o);n>=x.length&&setTimeout(j,250)}else setTimeout(j,250)},de=({data:a,nomorSurat:f})=>null,F=[{value:"1",label:"Tingkat 1 / Kelas 1"},{value:"2",label:"Tingkat 2 / Kelas 2"},{value:"3",label:"Tingkat 3 / Kelas 3"},{value:"4",label:"Tingkat 4 / Kelas 4"},{value:"5",label:"Tingkat 5 / Kelas 5"},{value:"6",label:"Tingkat 6 / Kelas 6"},{value:"7",label:"Tingkat 7 / Kelas 7"},{value:"8",label:"Tingkat 8 / Kelas 8"},{value:"9",label:"Tingkat 9 / Kelas 9"},{value:"10",label:"Tingkat 10 / Kelas 10"},{value:"11",label:"Tingkat 11 / Kelas 11"},{value:"12",label:"Tingkat 12 / Kelas 12"}],ge=({rombels:a,staff:f,students:w,onRefresh:_,onView:L,hasAccess:T,settings:S})=>{const[y,u]=m.useState(!1),[g,k]=m.useState(null),[$,N]=m.useState(null),[s,d]=m.useState({tingkat:"",name:"",wali_kelas_id:""}),[A,b]=m.useState(""),[P,K]=m.useState([]),[R,I]=m.useState([]),[E,j]=m.useState(!1),[x,n]=m.useState(""),[o,p]=m.useState(!1),[C,G]=m.useState(null);m.useEffect(()=>{(async()=>{try{const l=S?.bentuk_pendidikan?`?jenjang_pendidikan_id=${S.bentuk_pendidikan}`:"",i=await fetch(`/api/tingkat_pendidikan${l}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});if(i.ok){const r=await i.json();if(Array.isArray(r)&&r.length>0){I(r);return}}}catch(l){console.error(l)}I(F)})()},[S?.bentuk_pendidikan]),m.useEffect(()=>{if(A.length>1){const e=(f||[]).filter(l=>(l.nama_lengkap||l.nama||"").toLowerCase().includes(A.toLowerCase()));K(e)}else K([])},[A,f]);const D=async()=>{if(!s.name||!s.name.trim()){alert("Harap isi Nama Rombel / Kelas.");return}const e=localStorage.getItem("token"),l=(a||[]).find(c=>g&&(c.id===g||c.rombongan_belajar_id===g)||String(c.name||c.nama||"").trim().toLowerCase()===String(s.name).trim().toLowerCase()),i=g||(l?l.id||l.rombongan_belajar_id:null),r=i?`/api/rombongan_belajar/${i}`:"/api/rombongan_belajar",h=i?"PUT":"POST";try{const c=await fetch(r,{method:h,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({name:s.name.trim(),tingkat:s.tingkat||null,wali_kelas_id:s.wali_kelas_id||null})});if(!c.ok){const z=await c.json().catch(()=>({}));alert(`Gagal menyimpan rombel: ${z.error||"Terjadi kesalahan sistem"}`);return}u(!1),k(null),d({tingkat:"",name:"",wali_kelas_id:""}),b(""),_()}catch(c){console.error("Save error:",c),alert("Terjadi kesalahan koneksi saat menyimpan rombel.")}},Y=e=>{const l=e.id||e.rombongan_belajar_id,i=e.name||e.nama||"";k(l),d({tingkat:e.tingkat_pendidikan_id||e.tingkat||"",name:i,wali_kelas_id:e.wali_kelas_id||e.ptk_id||""}),b(e.wali_kelas_name||""),u(!0)},V=e=>{const l=e.id||e.rombongan_belajar_id;if($===l){const i=localStorage.getItem("token");fetch(`/api/rombongan_belajar/${l}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}}).then(async r=>{if(r.ok)_(),N(null);else{const h=await r.json().catch(()=>({}));alert(`Gagal menghapus rombel: ${h.error||"Terjadi kesalahan sistem"}`),N(null)}}).catch(r=>{console.error("Delete error:",r),alert("Gagal koneksi."),N(null)})}else N(l)},q=async()=>{p(!0);try{const e=await fetch("/api/cetak/keterangan-rombel",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});if(e.ok){const l=await e.json();oe(l,x,()=>{p(!1),j(!1)})}else alert("Gagal mengambil data cetak"),p(!1)}catch(e){console.error(e),alert("Terjadi kesalahan sistem"),p(!1)}},Q=e=>{let l=e.count_l!==void 0&&e.count_l!==null?parseInt(e.count_l):NaN,i=e.count_p!==void 0&&e.count_p!==null?parseInt(e.count_p):NaN;if(isNaN(l)||isNaN(i)||l===0&&i===0){const c=String(e.name||e.nama||"").trim().toLowerCase(),z=c.replace(/^kelas\s+/i,""),O=e.rombongan_belajar_id||e.id,B=(w||[]).filter(v=>{const H=String(v.rombel||v.kelas||"").trim().toLowerCase(),Z=H.replace(/^kelas\s+/i,""),U=v.rombongan_belajar_id;return O&&U&&U===O||c&&(H===c||Z===z)});B.length>0&&(l=B.filter(v=>(v.jenis_kelamin||"").toUpperCase()==="L").length,i=B.filter(v=>(v.jenis_kelamin||"").toUpperCase()==="P").length)}const r=(isNaN(l)?0:l)+(isNaN(i)?0:i),h=e.student_count!==void 0&&e.student_count!==null&&Number(e.student_count)>r?Number(e.student_count):r;return{countL:isNaN(l)?0:l,countP:isNaN(i)?0:i,total:h}},J=ee.useMemo(()=>{const e=new Set,l=[];for(const i of a||[]){const h=String(i.name||i.nama||"").trim().toLowerCase().replace(/[\s\-_]+/g,"").replace(/^kelas/i,"");h&&(e.has(h)||(e.add(h),l.push(i)))}return l.length>0?l:a||[]},[a]),X=R&&R.length>0?R.map(e=>({value:String(e.id||e.tingkat_pendidikan_id||e.value),label:e.nama||e.label||`Tingkat ${e.id}`})):F;return t.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[t.jsxs("div",{className:"flex justify-between items-center mb-10 print:hidden",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase",children:"Manajemen Rombongan Belajar (Rombel)"}),t.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1",children:"Daftar rombel, pembagian wali kelas, serta rincian peserta didik Laki-laki dan Perempuan."})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("button",{onClick:()=>{j(!0),n("")},className:"px-6 py-4 rounded-xl text-[11px] font-bold uppercase tracking-wide flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-all active:scale-95 shadow-emerald-600/20",children:[t.jsx(W,{className:"w-4 h-4"})," Cetak Keterangan"]}),t.jsxs("button",{onClick:()=>{y?(u(!1),k(null)):(k(null),d({tingkat:"",name:"",wali_kelas_id:""}),b(""),u(!0))},className:`px-8 py-4 rounded-xl text-[11px] font-bold uppercase tracking-wide flex items-center gap-3 shadow-2xl transition-all active:scale-95 ${y?"bg-slate-100 text-slate-600 dark:text-slate-400":"bg-blue-700 text-white shadow-blue-700/20"}`,children:[t.jsx(ne,{className:`w-4 h-4 transition-transform ${y?"rotate-45":""}`})," ",y?"Batal":"Tambah Rombongan Belajar"]})]})]}),y&&t.jsxs("div",{className:"bg-white dark:bg-slate-900 dark:border-slate-700 p-10 rounded-xl border border-blue-100 shadow-xl mb-12 animate-in slide-in-from-top-4",children:[t.jsx("h3",{className:"text-sm font-bold text-blue-700 uppercase tracking-wide mb-8",children:g?"Edit Rombongan Belajar":"Tambah Rombel Baru"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3 ml-1",children:"Tingkat Kelas"}),t.jsx(te,{value:s.tingkat,onChange:e=>d({...s,tingkat:e.target.value}),name:"tingkat",options:X,placeholder:"Pilih Tingkat"})]}),t.jsxs("div",{className:"flex flex-col gap-1.5",children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 ml-1",children:"Nama Rombel / Kelas"}),t.jsx(ae,{value:s.name,onChange:e=>d({...s,name:e.target.value}),name:"name",options:Array.from(new Set([...(a||[]).map(e=>e.name||e.nama),...(w||[]).map(e=>e.rombel||e.kelas).filter(Boolean)])).filter(Boolean).sort(),placeholder:"Ketik atau pilih Rombel..."})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3 ml-1",children:"Cari Wali Kelas (Nama)"}),t.jsx("input",{type:"text",value:A,onChange:e=>b(e.target.value),placeholder:"Ketik Nama Wali Kelas...",className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-700 font-bold"}),P.length>0&&t.jsx("div",{className:"mt-2 bg-white dark:bg-slate-900 dark:border-slate-700 border border-slate-100 dark:border-slate-700/50 rounded-xl shadow-lg p-2 max-h-40 overflow-y-auto",children:P.map(e=>t.jsx("button",{onClick:()=>{d({...s,wali_kelas_id:e.id||e.pegawai_id||e.ptk_id}),b(e.nama_lengkap||e.nama),K([])},className:"w-full text-left p-3 hover:bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-bold",children:e.nama_lengkap||e.nama},e.id||e.pegawai_id||e.ptk_id))})]})]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{onClick:D,className:"bg-slate-900 text-white px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-wide shadow-xl hover:bg-blue-700 transition-all active:scale-95",children:g?"Simpan Perubahan":"Simpan Rombongan Belajar"}),t.jsx("button",{onClick:()=>{u(!1),k(null),d({tingkat:"",name:"",wali_kelas_id:""}),b("")},className:"px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-wide bg-slate-100 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all active:scale-95",children:"Batal"})]})]}),E&&t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm print:hidden",children:t.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-200",children:[t.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase",children:"Cetak Keterangan Rombel"}),t.jsxs("div",{className:"mb-6",children:[t.jsx("label",{className:"block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2",children:"Nomor Surat (Opsional)"}),t.jsx("input",{type:"text",value:x,onChange:e=>n(e.target.value),placeholder:"Contoh: 421.2/83/SDN-TT1/VII/2026",className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 font-medium"})]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{onClick:q,disabled:o,className:"flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2",children:o?"Menyiapkan Data...":t.jsxs(t.Fragment,{children:[t.jsx(W,{className:"w-4 h-4"})," Cetak Sekarang"]})}),t.jsx("button",{onClick:()=>j(!1),className:"px-6 py-3 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",children:"Batal"})]})]})}),t.jsx("div",{className:"print:hidden overflow-x-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md",children:t.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[t.jsx("thead",{className:"border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Nama Rombel"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Tingkat"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Wali Kelas"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center",children:"Total Siswa"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center",children:"Aksi"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/50",children:J.length===0?t.jsx("tr",{children:t.jsxs("td",{colSpan:5,className:"px-6 py-12 text-center text-slate-400 dark:text-slate-500 font-medium",children:["Belum ada data rombongan belajar. Klik tombol ",t.jsx("strong",{children:"+ Tambah Rombongan Belajar"})," di atas atau lakukan sinkronisasi Dapodik."]})}):J.map(e=>{const l=e.name||e.nama||"",i=e.id||e.rombongan_belajar_id,r=Q(e);return t.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsx("span",{className:"font-bold text-slate-900 dark:text-white text-base",children:/^kelas\s+/i.test(l)?l:l?"Kelas "+l:"-"})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsxs("span",{className:"px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100 dark:border-blue-800",children:["Tingkat ",e.tingkat_pendidikan_id||e.tingkat||"-"]})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:e.wali_kelas_name?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"block text-sm font-bold text-slate-800 dark:text-slate-200",children:e.wali_kelas_name}),e.wali_kelas_nip&&t.jsxs("span",{className:"block text-xs text-slate-500 dark:text-slate-400",children:["NIP: ",e.wali_kelas_nip]})]}):t.jsx("span",{className:"block text-sm font-bold text-red-500 italic",children:"Belum ditunjuk"})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle text-center",children:t.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t.jsx("span",{className:"font-extrabold text-slate-900 dark:text-white text-base",children:r.total}),t.jsxs("div",{className:"flex items-center gap-1.5 mt-1 text-[11px] font-bold",children:[t.jsxs("span",{className:"px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded border border-blue-200/60 dark:border-blue-800/60",title:"Jumlah Siswa Laki-laki",children:["L: ",r.countL]}),t.jsxs("span",{className:"px-2 py-0.5 bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 rounded border border-rose-200/60 dark:border-rose-800/60",title:"Jumlah Siswa Perempuan",children:["P: ",r.countP]})]})]})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsxs("div",{className:"flex gap-2 justify-center",children:[(!T||T("rombels:update"))&&t.jsx("button",{onClick:()=>Y(e),className:"w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all",title:"Edit",children:t.jsx(se,{className:"w-4 h-4"})}),(!T||T("rombels:delete"))&&t.jsx("button",{onClick:()=>V(e),className:`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${$===i?"bg-red-600 text-white w-auto px-2 text-xs font-bold":"bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-600 hover:text-white"}`,title:"Hapus",children:$===i?"Hapus":t.jsx(ie,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>L(e),className:"w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 dark:hover:text-white transition-all",title:"Detail",children:t.jsx(re,{className:"w-4 h-4"})})]})})]},i||l)})})]})}),C&&t.jsx(de,{data:C,nomorSurat:x})]})};export{ge as RombelSection};
