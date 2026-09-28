import{J as X,r as p,j as t,N as q,P as Z,Y as ee,$ as te,f as ae,T as le,d as ne}from"./index-CgkxkKds.js";const Y=(l,w,x)=>X(l,w,x),se=(l,w,x)=>{var R,C,v,L,W,B,M,G,J,O,H,e,s;if(!l)return;const _=new Date().getFullYear(),D=l.tahun_pelajaran||`${_}/${_+1}`,T=(l.tahun_pelajaran?l.tahun_pelajaran.split("/")[0]:"")||String(_),g=a=>a?a.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "):"",y=a=>["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][a],k=new Date,b=`${g(((R=l.sekolah)==null?void 0:R.kota)||"Tangerang").replace(/^Kota /i,"")}, &nbsp;&nbsp;&nbsp;&nbsp; ${y(k.getMonth())} ${k.getFullYear()}`,f=((C=l.tingkatAggr)==null?void 0:C.reduce((a,n)=>a+n.count,0))||0,S=()=>{var a,n,r,o,u,c,E,U,F,V;return(a=l.sekolah)!=null&&a.kop_surat_url?`<div style="margin-bottom: 20px; width: 100%;">
                <img src="${l.sekolah.kop_surat_url}" alt="Kop Surat" style="width: 100%; height: auto; display: block;" />
            </div>`:`
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #000; padding-bottom: 12px; margin-bottom: 24px;">
                <div style="width: 85px; flex-shrink: 0; text-align: center;">
                    ${(n=l.sekolah)!=null&&n.logo_url?`<img src="${l.sekolah.logo_url}" alt="Logo" style="width: 80px; height: 80px; object-fit: contain; display: block; margin: 0 auto;" />`:""}
                </div>
                <div style="flex: 1; text-align: center; padding: 0 10px;">
                    <h1 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">PEMERINTAH ${((r=l.sekolah)==null?void 0:r.kota)||"KOTA TANGERANG"}</h1>
                    <h2 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">DINAS PENDIDIKAN</h2>
                    <h3 style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2px 0;">${((o=l.sekolah)==null?void 0:o.status_sekolah)==="Swasta"?"":"UPT. SATUAN PENDIDIKAN "}${((u=l.sekolah)==null?void 0:u.school_name)||"SD NEGERI TANAH TINGGI 1"}</h3>
                    <h4 style="font-size: 11pt; font-weight: bold; text-transform: uppercase; margin: 0 0 4px 0;">KECAMATAN ${((c=l.sekolah)==null?void 0:c.kecamatan)||"TANGERANG"}</h4>
                    <p style="font-size: 8.5pt; margin: 0 0 2px 0;">NPSN : ${((E=l.sekolah)==null?void 0:E.npsn)||"-"}, NSS : -</p>
                    <p style="font-size: 8.5pt; margin: 0 0 2px 0;">${((U=l.sekolah)==null?void 0:U.contact_address)||"Jl. Daan Mogot No. 1/13 Tanah Tinggi Tangerang"}, Telp ${((F=l.sekolah)==null?void 0:F.contact_phone)||"-"}</p>
                    <p style="font-size: 8.5pt; text-transform: uppercase; letter-spacing: 0.2em; margin: 0;">${(((V=l.sekolah)==null?void 0:V.kota)||"Tangerang").replace(/^Kota /i,"")}</p>
                </div>
                <div style="width: 85px; flex-shrink: 0;"></div>
            </div>
        `};let j=document.getElementById("rombel-print-iframe");j&&j.remove();const i=document.createElement("iframe");i.id="rombel-print-iframe",i.style.position="fixed",i.style.right="0",i.style.bottom="0",i.style.width="0",i.style.height="0",i.style.border="0",i.style.zIndex="-1",document.body.appendChild(i);const d=((v=i.contentWindow)==null?void 0:v.document)||i.contentDocument;if(!d){window.print(),x==null||x();return}const $=(l.rombels||[]).map((a,n)=>{const r=parseInt(a.count_l)||0,o=parseInt(a.count_p)||0,u=a.wali_kelas_name?Y(a.gelar_depan,a.wali_kelas_name,a.gelar_belakang):"",c=/^kelas /i.test(a.name)?a.name:"Kelas "+a.name;return`
            <tr>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${n+1}</td>
                <td style="border: 1px solid #000; padding: 4px 8px; text-align: left;">${c}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${r}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${o}</td>
                <td style="border: 1px solid #000; padding: 4px 6px; text-align: center; font-weight: bold;">${r+o}</td>
                <td style="border: 1px solid #000; padding: 4px 8px; text-align: left; text-transform: uppercase;">${u}</td>
            </tr>
        `}).join(""),h=((L=l.rombels)==null?void 0:L.reduce((a,n)=>a+(parseInt(n.count_l)||0),0))||0,I=((W=l.rombels)==null?void 0:W.reduce((a,n)=>a+(parseInt(n.count_p)||0),0))||0,P=h+I,K=(l.tingkatAggr||[]).map(a=>`
        <tr>
            <td style="width: 120px; padding: 2px 0;">Kelas ${a.tingkat}</td>
            <td style="width: 15px; padding: 2px 0;">:</td>
            <td style="padding: 2px 0;">${a.count} Rombel</td>
        </tr>
    `).join(""),A=l.kepsek?Y(l.kepsek.gelar_depan,l.kepsek.nama_lengkap,l.kepsek.gelar_belakang):".....................................................",z=l.pengawas?Y(l.pengawas.gelar_depan,l.pengawas.nama_lengkap,l.pengawas.gelar_belakang):".....................................................";d.open(),d.write(`
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
                ${S()}
                
                <div style="text-align: center; margin-bottom: 24px;">
                    <h2 style="font-size: 12.5pt; font-weight: bold; text-decoration: underline; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px 0;">SURAT KETERANGAN ROMBEL</h2>
                    <p style="font-size: 11pt; margin: 0;">No. ${w||"..........................................."}</p>
                </div>

                <div style="text-align: justify; font-size: 11pt; line-height: 1.4; margin-bottom: 20px; padding: 0 10px;">
                    <p style="margin-bottom: 12px;">Yang bertanda tangan di bawah ini :</p>
                    
                    <table style="width: 100%; margin-bottom: 16px; margin-left: 20px;">
                        <tbody>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">N a m a</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0; font-weight: bold;">${A}</td>
                            </tr>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">NIP</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0;">${((B=l.kepsek)==null?void 0:B.nip)||"-"}</td>
                            </tr>
                            <tr>
                                <td style="width: 140px; padding: 3px 0; vertical-align: top;">Jabatan</td>
                                <td style="width: 15px; padding: 3px 0; vertical-align: top;">:</td>
                                <td style="padding: 3px 0;">Kepala ${((M=l.sekolah)==null?void 0:M.school_name)||"SDN Tanah Tinggi 1"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p style="text-indent: 30px; margin-bottom: 12px;">
                        Dengan ini menerangkan bahwa keadaan Rombongan Belajar (Rombel) di ${((G=l.sekolah)==null?void 0:G.school_name)||"SDN Tanah Tinggi 1"} Tahun Pelajaran ${D} yaitu ${f} rombel dengan rincian sebagai berikut :
                    </p>
                    
                    <div style="margin-left: 50px; margin-bottom: 16px;">
                        <table style="width: 70%;">
                            <tbody>
                                ${K}
                                <tr>
                                    <td style="width: 120px; padding: 4px 0; font-weight: bold;">Jumlah</td>
                                    <td style="width: 15px; padding: 4px 0; font-weight: bold;">:</td>
                                    <td style="padding: 4px 0; font-weight: bold;">${f} Rombel</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style="text-indent: 30px; margin-bottom: 0;">
                        Demikian keterangan ini dibuat, sebagai kelengkapan data usulan Insentif Tenaga Pendidik dan Kependidikan ${g(((J=l.sekolah)==null?void 0:J.kota)||"Kota Tangerang")} Tahun Anggaran ${T}.
                    </p>
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 40px; font-size: 11pt; padding: 0 10px;">
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">Mengetahui,</p>
                        <p style="margin: 0 0 65px 0;">Pengawas Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${z}</p>
                        <p style="margin: 0;">NIP. ${((O=l.pengawas)==null?void 0:O.nip)||"-"}</p>
                    </div>
                    
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">${b}</p>
                        <p style="margin: 0 0 65px 0;">Yang membuat pernyataan</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${A}</p>
                        <p style="margin: 0;">NIP. ${((H=l.kepsek)==null?void 0:H.nip)||"-"}</p>
                    </div>
                </div>
            </div>

            <!-- HALAMAN 2 -->
            <div class="page-break"></div>
            <div class="page-container" style="padding-top: 10px;">
                ${S()}
                
                <div style="text-align: center; margin-bottom: 16px;">
                    <h2 style="font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 2px 0;">JUMLAH SISWA DAN ROMBONGAN BELAJAR</h2>
                    <h2 style="font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">TAHUN PELAJARAN ${D}</h2>
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
                        ${$}
                        <tr style="background-color: #f2f2f2; font-weight: bold;">
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;" colspan="2">JUMLAH</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${h}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${I}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px; text-align: center;">${P}</td>
                            <td style="border: 1px solid #000; padding: 4px 6px;"></td>
                        </tr>
                    </tbody>
                </table>

                <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 11pt; padding: 0 10px;">
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">Mengetahui,</p>
                        <p style="margin: 0 0 65px 0;">Pengawas Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${z}</p>
                        <p style="margin: 0;">NIP. ${((e=l.pengawas)==null?void 0:e.nip)||"-"}</p>
                    </div>
                    
                    <div style="text-align: left; width: 45%;">
                        <p style="margin: 0 0 2px 0;">${b}</p>
                        <p style="margin: 0 0 65px 0;">Kepala Sekolah</p>
                        
                        <p style="font-weight: bold; text-decoration: underline; margin: 0 0 2px 0;">${A}</p>
                        <p style="margin: 0;">NIP. ${((s=l.kepsek)==null?void 0:s.nip)||"-"}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `),d.close();const N=()=>{var a,n;try{(a=i.contentWindow)==null||a.focus(),(n=i.contentWindow)==null||n.print()}catch(r){console.error("Iframe print error:",r),window.print()}finally{setTimeout(()=>{i.remove(),x==null||x()},1e3)}},m=d.images;if(m.length>0){let a=0;const n=()=>{a++,a>=m.length&&setTimeout(N,250)};for(let r=0;r<m.length;r++)m[r].complete?a++:(m[r].onload=n,m[r].onerror=n);a>=m.length&&setTimeout(N,250)}else setTimeout(N,250)},ie=({data:l,nomorSurat:w})=>null,Q=[{value:"1",label:"Tingkat 1 / Kelas 1"},{value:"2",label:"Tingkat 2 / Kelas 2"},{value:"3",label:"Tingkat 3 / Kelas 3"},{value:"4",label:"Tingkat 4 / Kelas 4"},{value:"5",label:"Tingkat 5 / Kelas 5"},{value:"6",label:"Tingkat 6 / Kelas 6"},{value:"7",label:"Tingkat 7 / Kelas 7"},{value:"8",label:"Tingkat 8 / Kelas 8"},{value:"9",label:"Tingkat 9 / Kelas 9"},{value:"10",label:"Tingkat 10 / Kelas 10"},{value:"11",label:"Tingkat 11 / Kelas 11"},{value:"12",label:"Tingkat 12 / Kelas 12"}],oe=({rombels:l,staff:w,students:x,onRefresh:_,onView:D,hasAccess:T,settings:g})=>{const[y,k]=p.useState(!1),[b,f]=p.useState(null),[S,j]=p.useState(null),[i,d]=p.useState({tingkat:"",name:"",wali_kelas_id:""}),[$,h]=p.useState(""),[I,P]=p.useState([]),[K,A]=p.useState([]),[z,N]=p.useState(!1),[m,R]=p.useState(""),[C,v]=p.useState(!1),[L,W]=p.useState(null);p.useEffect(()=>{(async()=>{try{const s=g!=null&&g.bentuk_pendidikan?`?jenjang_pendidikan_id=${g.bentuk_pendidikan}`:"",a=await fetch(`/api/tingkat_pendidikan${s}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});if(a.ok){const n=await a.json();if(Array.isArray(n)&&n.length>0){A(n);return}}}catch(s){console.error(s)}A(Q)})()},[g==null?void 0:g.bentuk_pendidikan]),p.useEffect(()=>{if($.length>1){const e=(w||[]).filter(s=>(s.nama_lengkap||s.nama||"").toLowerCase().includes($.toLowerCase()));P(e)}else P([])},[$,w]);const B=async()=>{if(!i.name||!i.name.trim()){alert("Harap isi Nama Rombel / Kelas.");return}const e=localStorage.getItem("token"),s=(l||[]).find(o=>b&&(o.id===b||o.rombongan_belajar_id===b)||String(o.name||o.nama||"").trim().toLowerCase()===String(i.name).trim().toLowerCase()),a=b||(s?s.id||s.rombongan_belajar_id:null),n=a?`/api/rombongan_belajar/${a}`:"/api/rombongan_belajar",r=a?"PUT":"POST";try{const o=await fetch(n,{method:r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({name:i.name.trim(),tingkat:i.tingkat||null,wali_kelas_id:i.wali_kelas_id||null})});if(!o.ok){const u=await o.json().catch(()=>({}));alert(`Gagal menyimpan rombel: ${u.error||"Terjadi kesalahan sistem"}`);return}k(!1),f(null),d({tingkat:"",name:"",wali_kelas_id:""}),h(""),_()}catch(o){console.error("Save error:",o),alert("Terjadi kesalahan koneksi saat menyimpan rombel.")}},M=e=>{const s=e.id||e.rombongan_belajar_id,a=e.name||e.nama||"";f(s),d({tingkat:e.tingkat_pendidikan_id||e.tingkat||"",name:a,wali_kelas_id:e.wali_kelas_id||e.ptk_id||""}),h(e.wali_kelas_name||""),k(!0)},G=e=>{const s=e.id||e.rombongan_belajar_id;if(S===s){const a=localStorage.getItem("token");fetch(`/api/rombongan_belajar/${s}`,{method:"DELETE",headers:{Authorization:`Bearer ${a}`}}).then(async n=>{if(n.ok)_(),j(null);else{const r=await n.json().catch(()=>({}));alert(`Gagal menghapus rombel: ${r.error||"Terjadi kesalahan sistem"}`),j(null)}}).catch(n=>{console.error("Delete error:",n),alert("Gagal koneksi."),j(null)})}else j(s)},J=async()=>{v(!0);try{const e=await fetch("/api/cetak/keterangan-rombel",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});if(e.ok){const s=await e.json();se(s,m,()=>{v(!1),N(!1)})}else alert("Gagal mengambil data cetak"),v(!1)}catch(e){console.error(e),alert("Terjadi kesalahan sistem"),v(!1)}},O=e=>{let s=e.count_l!==void 0&&e.count_l!==null?parseInt(e.count_l):NaN,a=e.count_p!==void 0&&e.count_p!==null?parseInt(e.count_p):NaN;if(isNaN(s)||isNaN(a)){const r=String(e.name||e.nama||"").trim().toLowerCase(),o=e.rombongan_belajar_id||e.id,u=(x||[]).filter(c=>{const E=String(c.rombel||c.kelas||"").trim().toLowerCase(),U=c.rombongan_belajar_id;return o&&U===o||r&&(E===r||E===r.replace(/^kelas\s+/i,""))});s=u.filter(c=>(c.jenis_kelamin||"").toUpperCase()==="L").length,a=u.filter(c=>(c.jenis_kelamin||"").toUpperCase()==="P").length}const n=e.student_count!==void 0&&e.student_count!==null?Number(e.student_count):(s||0)+(a||0);return{countL:s||0,countP:a||0,total:n||(s||0)+(a||0)}},H=K&&K.length>0?K.map(e=>({value:String(e.id||e.tingkat_pendidikan_id||e.value),label:e.nama||e.label||`Tingkat ${e.id}`})):Q;return t.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[t.jsxs("div",{className:"flex justify-between items-center mb-10 print:hidden",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase",children:"Manajemen Rombongan Belajar (Rombel)"}),t.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1",children:"Daftar rombel, pembagian wali kelas, serta rincian peserta didik Laki-laki dan Perempuan."})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("button",{onClick:()=>{N(!0),R("")},className:"px-6 py-4 rounded-xl text-[11px] font-bold uppercase tracking-wide flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-all active:scale-95 shadow-emerald-600/20",children:[t.jsx(q,{className:"w-4 h-4"})," Cetak Keterangan"]}),t.jsxs("button",{onClick:()=>{y?(k(!1),f(null)):(f(null),d({tingkat:"",name:"",wali_kelas_id:""}),h(""),k(!0))},className:`px-8 py-4 rounded-xl text-[11px] font-bold uppercase tracking-wide flex items-center gap-3 shadow-2xl transition-all active:scale-95 ${y?"bg-slate-100 text-slate-600 dark:text-slate-400":"bg-blue-700 text-white shadow-blue-700/20"}`,children:[t.jsx(Z,{className:`w-4 h-4 transition-transform ${y?"rotate-45":""}`})," ",y?"Batal":"Tambah Rombongan Belajar"]})]})]}),y&&t.jsxs("div",{className:"bg-white dark:bg-slate-900 dark:border-slate-700 p-10 rounded-xl border border-blue-100 shadow-xl mb-12 animate-in slide-in-from-top-4",children:[t.jsx("h3",{className:"text-sm font-bold text-blue-700 uppercase tracking-wide mb-8",children:b?"Edit Rombongan Belajar":"Tambah Rombel Baru"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3 ml-1",children:"Tingkat Kelas"}),t.jsx(ee,{value:i.tingkat,onChange:e=>d({...i,tingkat:e.target.value}),name:"tingkat",options:H,placeholder:"Pilih Tingkat"})]}),t.jsxs("div",{className:"flex flex-col gap-1.5",children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 ml-1",children:"Nama Rombel / Kelas"}),t.jsx(te,{value:i.name,onChange:e=>d({...i,name:e.target.value}),name:"name",options:Array.from(new Set([...(l||[]).map(e=>e.name||e.nama),...(x||[]).map(e=>e.rombel||e.kelas).filter(Boolean)])).filter(Boolean).sort(),placeholder:"Ketik atau pilih Rombel..."})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3 ml-1",children:"Cari Wali Kelas (Nama)"}),t.jsx("input",{type:"text",value:$,onChange:e=>h(e.target.value),placeholder:"Ketik Nama Wali Kelas...",className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-700 font-bold"}),I.length>0&&t.jsx("div",{className:"mt-2 bg-white dark:bg-slate-900 dark:border-slate-700 border border-slate-100 dark:border-slate-700/50 rounded-xl shadow-lg p-2 max-h-40 overflow-y-auto",children:I.map(e=>t.jsx("button",{onClick:()=>{d({...i,wali_kelas_id:e.id||e.pegawai_id||e.ptk_id}),h(e.nama_lengkap||e.nama),P([])},className:"w-full text-left p-3 hover:bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-bold",children:e.nama_lengkap||e.nama},e.id||e.pegawai_id||e.ptk_id))})]})]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{onClick:B,className:"bg-slate-900 text-white px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-wide shadow-xl hover:bg-blue-700 transition-all active:scale-95",children:b?"Simpan Perubahan":"Simpan Rombongan Belajar"}),t.jsx("button",{onClick:()=>{k(!1),f(null),d({tingkat:"",name:"",wali_kelas_id:""}),h("")},className:"px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-wide bg-slate-100 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all active:scale-95",children:"Batal"})]})]}),z&&t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm print:hidden",children:t.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-200",children:[t.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase",children:"Cetak Keterangan Rombel"}),t.jsxs("div",{className:"mb-6",children:[t.jsx("label",{className:"block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2",children:"Nomor Surat (Opsional)"}),t.jsx("input",{type:"text",value:m,onChange:e=>R(e.target.value),placeholder:"Contoh: 421.2/83/SDN-TT1/VII/2026",className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 font-medium"})]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{onClick:J,disabled:C,className:"flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2",children:C?"Menyiapkan Data...":t.jsxs(t.Fragment,{children:[t.jsx(q,{className:"w-4 h-4"})," Cetak Sekarang"]})}),t.jsx("button",{onClick:()=>N(!1),className:"px-6 py-3 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",children:"Batal"})]})]})}),t.jsx("div",{className:"print:hidden overflow-x-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md",children:t.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[t.jsx("thead",{className:"border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Nama Rombel"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Tingkat"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"Wali Kelas"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center",children:"Total Siswa"}),t.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center",children:"Aksi"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800/50",children:(l||[]).length===0?t.jsx("tr",{children:t.jsxs("td",{colSpan:5,className:"px-6 py-12 text-center text-slate-400 dark:text-slate-500 font-medium",children:["Belum ada data rombongan belajar. Klik tombol ",t.jsx("strong",{children:"+ Tambah Rombongan Belajar"})," di atas atau lakukan sinkronisasi Dapodik."]})}):(l||[]).map(e=>{const s=e.name||e.nama||"",a=e.id||e.rombongan_belajar_id,n=O(e);return t.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsx("span",{className:"font-bold text-slate-900 dark:text-white text-base",children:/^kelas\s+/i.test(s)?s:s?"Kelas "+s:"-"})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsxs("span",{className:"px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100 dark:border-blue-800",children:["Tingkat ",e.tingkat_pendidikan_id||e.tingkat||"-"]})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:e.wali_kelas_name?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"block text-sm font-bold text-slate-800 dark:text-slate-200",children:e.wali_kelas_name}),e.wali_kelas_nip&&t.jsxs("span",{className:"block text-xs text-slate-500 dark:text-slate-400",children:["NIP: ",e.wali_kelas_nip]})]}):t.jsx("span",{className:"block text-sm font-bold text-red-500 italic",children:"Belum ditunjuk"})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle text-center",children:t.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t.jsx("span",{className:"font-extrabold text-slate-900 dark:text-white text-base",children:n.total}),t.jsxs("div",{className:"flex items-center gap-1.5 mt-1 text-[11px] font-bold",children:[t.jsxs("span",{className:"px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded border border-blue-200/60 dark:border-blue-800/60",title:"Jumlah Siswa Laki-laki",children:["L: ",n.countL]}),t.jsxs("span",{className:"px-2 py-0.5 bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 rounded border border-rose-200/60 dark:border-rose-800/60",title:"Jumlah Siswa Perempuan",children:["P: ",n.countP]})]})]})}),t.jsx("td",{className:"px-6 py-4 text-sm text-slate-600 dark:text-slate-400 align-middle",children:t.jsxs("div",{className:"flex gap-2 justify-center",children:[(!T||T("rombels:update"))&&t.jsx("button",{onClick:()=>M(e),className:"w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all",title:"Edit",children:t.jsx(ae,{className:"w-4 h-4"})}),(!T||T("rombels:delete"))&&t.jsx("button",{onClick:()=>G(e),className:`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${S===a?"bg-red-600 text-white w-auto px-2 text-xs font-bold":"bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-600 hover:text-white"}`,title:"Hapus",children:S===a?"Hapus":t.jsx(le,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>D(e),className:"w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 dark:hover:text-white transition-all",title:"Detail",children:t.jsx(ne,{className:"w-4 h-4"})})]})})]},a||s)})})]})}),L&&t.jsx(ie,{data:L,nomorSurat:m})]})};export{oe as RombelSection};
