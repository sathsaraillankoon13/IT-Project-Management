const { test, expect } = require('@playwright/test');

const scenarios = [
   { 
        id: 'Pos_UI_0001', 
        input: 'viBhaagaya vinoodhayak lesa dhaekiya haeki krama vannee, suudhaanam viima, vishvaasaya, vageema apa kaemathi viShayan gaena avabooDhaya laebiimayi.', 
        expected: 'විභාගය විනෝදයක් ලෙස දැකිය හැකි ක්‍රම වන්නේ, සූදානම් වීම, විශ්වාසය, වගේම අප කැමති විෂයන් ගැන අවබෝධය ලැබීමයි.'
    },
     { 
        id: 'Pos_UI_0002', 
        input: 'gamata yanna mee paara aerunama vena paarak naedhdha?', 
        expected: 'ගමට යන්න මේ පාර ඇරුනම වෙන පාරක් නැද්ද?' 
    },
     { 
        id: 'Pos_UI_0003', 
        input: 'mevara usas pela viBhaagayen apa paasalee lamungen 80% kma ihala saamaartha sahithava samath vii thibiima apa paasalata gauravaya dhena karuNakii.'
,        expected: 'මෙවර උසස් පෙල විභාගයෙන් අප පාසලේ ලමුන්ගෙන් 80% ක්ම ඉහල සාමාර්ත සහිතව සමත් වී තිබීම අප පාසලට ගෞරවය දෙන කරුණකී.' 
    },
     { 
        id: 'Pos_UI_0004', 
        input: 'mama haemaveleema magee vaeda vala vaedhagathkama anuva peLagasvanavaa',
        expected: 'මම හැමවෙලේම මගේ වැඩ වල වැදගත්කම අනුව පෙළගස්වනවා',

    },

    { 
        id: 'Pos_UI_0005', 
        input: 'amaali paasale sitina dhakshathama violin vadhana shilpiniya nisaa aeya mevara paasala niyoojanaya karamin samastha lQQkaa tharagavaliyata theeri path vuvath aeyagee pavulee arThika apasasuthaa nisa aeya eyata  dhaedi unandhuvak dhaekvuyee naetha.', 
        expected: 'අමාලි පාසලෙ සිටින දක්ශතම violin වදන ශිල්පිනිය නිසා ඇය මෙවර පාසල නියෝජනය කරමින් සමස්ත ලංකා තරගවලියට තේරි පත් වුවත් ඇයගේ පවුලේ අර්ථික අපසසුතා නිස ඇය එයට  දැඩි උනන්දුවක් දැක්වුයේ නැත.' 
    },
     { 
        id: 'Pos_UI_0006', 
        input: 'amaayaa saha kamalgee vivaaha givisa gaenimee mQQgalYAta paemiNi siyalu dhenaama ovunta hadhavathinma aashirvaadhasaha suBa paethum ek kaleeya. ', 
        expected: 'අමායා සහ කමල්ගේ විවාහ ගිවිස ගැනිමේ මංගල්‍යට පැමිණි සියලු දෙනාම ඔවුන්ට හදවතින්ම ආශිර්වාදසහ සුඹ පැතුම් එක් කලේය.' 
    },
     { 
        id: 'Pos_UI_0007', 
        input: 'iiyee paevathi gam saBhaaveedhii gamee shramadhanayak paevaethviimata thiiraNaya kara aethi athara ee sadhahaa gamee siyaluma dhenaagee sahayoogaya gramaseevaka kivvaa ', 
        expected: 'ඊයේ පැවති ගම් සභාවේදී ගමේ ශ්‍රමදනයක් පැවැත්වීමට තීරණය කර ඇති අතර ඒ සදහා ගමේ සියලුම දෙනාගේ සහයෝගය ග්‍රමසේවක කිව්වා'

    },
   { 
        id: 'Pos_UI_0008', 
        input: 'panthiyeedhii guruthumaa igaenvu paadamen prashna pathrayak dhunnaa eeka panthiya asavanayeedhii eka  ivara karana lamayinta vitharayi   yanna dhunnee', 
        expected: 'පන්තියේදී ගුරුතුමා ඉගැන්වු පාඩමෙන් ප්‍රශ්න පත්‍රයක් දුන්නා ඒක පන්තිය අසවනයේදී එක  ඉවර කරන ලමයින්ට විතරයි   යන්න දුන්නේ'
    },
 { 
        id: 'Pos_UI_0009',
      input: 'dhavalta kaeema hadhalaa thiyennee ,yanna kalin kaalaa yanna', 
        expected: 'දවල්ට කෑම හදලා තියෙන්නේ ,යන්න කලින් කාලා යන්න'

    },
    { 
        id: 'Pos_UI_0010', 
        input: 'adha hari lassana dhavasakneedha? ', 
        expected: 'අද හරි ලස්සන දවසක්නේද?'
    },
 { 
        id: 'Pos_UI_0011', 
        input: 'svaBhaavika aapadhaa thathvaya heethuven kal dhama thibu saamanYa pela viBhagayata labana masa enam pebaravari masa paevaethviimata dhina niyama kara aetha.', 
        expected: 'ස්වභාවික ආපදා තත්වය හේතුවෙන් කල් දම තිබු සාමන්‍ය පෙල විභගයට ලබන මස එනම් පෙබරවරි මස පැවැත්වීමට දින නියම කර ඇත.'

    },
     
     { 
        id: 'Pos_UI_0012', 
        input: 'kaeela kaanththaara kapalaa dhaemmaama saththunta inna thaenak naethi venavaa. mee nisaa saQQchaaraka ksheethrayatath loku balapaamak aethi venavaa. saththunva arakshaa karanna saha eyaalagee nivaasa vinaashaya karanne naethuva inna  eka apee yuthukamak.', 
        expected: 'කෑල කාන්ත්තාර කපලා දැම්මාම සත්තුන්ට ඉන්න තැනක් නැති වෙනවා. මේ නිසා සංචාරක ක්ශේත්‍රයටත් ලොකු බලපාමක් ඇති වෙනවා. සත්තුන්ව අරක්ශා කරන්න සහ එයාලගේ නිවාස විනාශය කරන්නේ නැතුව ඉන්න  එක අපේ යුතුකමක්.'

    },
     { 
        id: 'Pos_UI_0013', 
        input: 'adha dhavaseema project eka karapu nisaa lectures yanna baeri unaa eth adha gedhara gihin eevagee vaeda tika karala ivara karanna oonee ema naethi unoth  exam ekata paadam karanna  godak dheeval vaedi venavaa.', 
        expected: 'අද දවසේම project එක කරපු නිසා lectures යන්න බැරි උනා එත් අද ගෙදර ගිහින් ඒවගේ වැඩ ටික කරල ඉවර කරන්න ඕනේ එම නැති උනොත්  exam එකට පාඩම් කරන්න  ගොඩක් දේවල් වැඩි වෙනවා.'

    },
     { 
        id: 'Pos_UI_0014', 
        input: 'thamangee target ekata yanakam mahansi velaa vaeda karanna. e vageema jeevithee thiyana punchi punchi deval valin sathutu venna purudhu venna. thaman gaena vishvaasayen idhiriyata yanna.', 
        expected: 'තමන්ගේ target එකට යනකම් මහන්සි වෙලා වැඩ කරන්න. එ වගේම ජේවිතේ තියන පුන්චි පුන්චි ඩෙවල් වලින් සතුටු වෙන්න පුරුදු වෙන්න. තමන් ගැන විශ්වාසයෙන් ඉදිරියට යන්න.'

    },
    { 
        id: 'Pos_UI_0015', 
        input: 'avurudhu kaaleeta laQQkaavee thiyana saQQskrUthika uthsava harima vidhimaath. kaeema jaathi, aluth aedhum saha gamee thiyaena kridaa nisaa thamaa eeke thiyana lassanata thava vaedi venne. meka thamaa api  naththal saha vesak  vagee uthsava valadhith dhakinne. mee vagee uthsava nisaa minissun athara thiyana sahoodharayathvaya saha ekamuthukama harima lassana vidhihata ithuru venavaa', 
        expected: 'අවුරුදු කාලේට ලංකාවේ තියන සංස්ක්‍රුතික උත්සව හරිම විදිමාත්. කෑම ජාති, අලුත් ඇදුම් සහ ගමේ තියැන ක්‍රිඩා නිසා තමා ඒකෙ තියන ලස්සනට තව වැඩි වෙන්නෙ. මෙක තමා අපි  නත්තල් සහ vesak  වගේ උත්සව වලදිත් දකින්නෙ. මේ වගේ උත්සව නිසා මිනිස්සුන් අතර තියන සහෝදරයත්වය සහ එකමුතුකම හරිම ලස්සන විදිහට ඉතුරු වෙනවා'

    },
    { 
        id: 'Pos_UI_0016', 
        input:'office eke vaeda godak thibunu  nisaa lunch eka godaak late unaa  ', 
        expected: 'office eke වැඩ ගොඩක් තිබුනු  නිසා lunch එක ගොඩාක් late උනා'
    },
    { 
        id: 'Pos_UI_0017', 
        input: 'godak aya hithannee viBhaagayak kiyannee loku piidanayak kiyalaa, haebaeyi api igena ganna dhee aasaaven karanavaa nam ee piidanaya naethi velaa yanavaa. haemadhaama podi ilakkayak thiyaagena vaeda karanna purudhu venna. ethakota apita laebena ee saarThakathvaya gaena aeththatama sathutu venna puLuvan ', 
        expected: 'ගොඩක් අය හිතන්නේ විභාගයක් කියන්නේ ලොකු පීඩනයක් කියලා, හැබැයි අපි ඉගෙන ගන්න දේ ආසාවෙන් කරනවා නම් ඒ පීඩනය නැති වෙලා යනවා. හැමදාම පොඩි ඉලක්කයක් තියාගෙන වැඩ කරන්න පුරුදු වෙන්න. එතකොට අපිට ලැබෙන ඒ සාර්ථකත්වය ගැන ඇත්තටම සතුටු වෙන්න පුළුවන්'
    },
      { 
        id: 'Pos_UI_0018', 
        input: ' adha udhaeesana sitama vaessa vaetena nisaa nagarayee gamanaagamanaya dhaediva avahira vuNaa. bohoo dhenaa office yanna pramaadha vuNa athara Zoom meetings Bhaavithaa karalaa vaeda karalaa thibuNaa.', 
        expected: 'අද උදෑසන සිටම වැස්ස වැටෙන නිසා නගරයේ ගමනාගමනය දැඩිව අවහිර වුණා. බොහෝ දෙනා office යන්න ප්‍රමාද වුණ අතර Zoom meetings භාවිතා කරලා වැඩ කරලා තිබුණා.'
    },
     { 
        id: 'Pos_UI_0019', 
        input: ' mama hodhin innavaa oyaata kohomadha? ', 
        expected: 'මම හොදින් ඉන්නවා ඔයාට කොහොමද?'
    },
 { 
        id: 'Pos_UI_0020', 
        input: ' ammayi mamayi adha udhee pansal gihin enakota pansala laga  accident ekak vela thibunaa', 
        expected: 'අම්මයි මමයි අද උදේ පන්සල් ගිහින් එනකොට පන්සල ලග  accident එකක් වෙල තිබුනා'
    },
     

     { 
        id: 'Pos_UI_0021', 
        input: 'ma kalin ee vaedee karanna baya hithuNath, yaaluvoo dhunna support eka nisaa confidence eka vaedi velaa, avasaanayee mata ee challenge eka jayaganna puLuvan vuNaa. ', 
        expected: 'ම කලින් ඒ වැඩේ කරන්න බය හිතුණත්, යාලුවෝ දුන්න support එක නිසා confidence එක වැඩි වෙලා, අවසානයේ මට ඒ challenge එක ජයගන්න පුළුවන් වුණා.'
    },
      { 
        id: 'Pos_UI_00022', 
        input: 'dhaen ithiQQ monavaa karannadha?', 
        expected: 'දැන් ඉතිං මොනවා කරන්නද?'
    },
     { 
        id: 'Pos_UI_0023', 
        input: 'paasalee udhee raesviimeedhii praDhana shiShYanaayakayaa karapu kathaavata ethaena hitapu haemadhenaama hodha prathichaara labaa dhunnaa.', 
        expected: 'පාසලේ උදේ රැස්වීමේදී ප්‍රධන ශිෂ්‍යනායකයා කරපු කතාවට එතැන හිටපු හැමදෙනාම හොද ප්‍රතිචාර ලබා දුන්නා.'

    },
     { 
        id: 'Pos_UI_00024', 
        input: ' Government eka adha new online learning platform ekak introduce kalaa, especially university students saQQdhahaa. Mee system eken lectures live stream enna puluwan, recordings download karanna puluvan, saha assignments submit karanna puluvan. Students samahara aya kiyannee internet speed eeka hariyata neat nisaa issues thiyanava kiyalaa. Ehema una namuth officials kiyannee future eke me platform eka improve karanava kiyalaa. Adha idhan E-learning kiyannee education sector ekee important part ekak velaa thiyanavaa.', 
        expected: 'Government එක අද new online learning platform එකක් introduce කලා, especially university students සංදහා. මේ system එකෙන් lectures live stream එන්න පුලුwඅන්, recordings download කරන්න පුලුවන්, සහ assignments submit කරන්න පුලුවන්. Students සමහර අය කියන්නේ internet speed ඒක හරියට neat නිසා issues තියනව කියලා. එහෙම උන නමුත් officials කියන්නේ future eke මෙ platform එක improve කරනව කියලා. අද ඉදන් එ-learning කියන්නේ education sector එකේ important part එකක් වෙලා තියනවා.'
    },
    { 
        id: 'Pos_UI_0025', 
        input: 'oyaa eeka karala nae', 
        expected: 'ඔයා ඒක කරල නැ'
    }, 
     { 
        id: 'Pos_UI_0025', 
        input: 'maarga niithi kada nokaranuu!', 
        expected: 'මාර්ග නීති කඩ නොකරනූ'
    },
    { 
        id: 'Neg_UI_0001', 
        input: 'aDhika varshaava nisaa dhavana maargaya lissana sulu baevin raTha vaahana semin maargayee gaman karanu karanu!', 
        expected: 'අධික වර්ශාව නිසා දවන මාර්ගය ලිස්සන සුලු බැවින් රථ වාහන සෙමින් මාර්ගයේ ගමන් කරනු කරනු! ' 
    },
   
    { 
        id: 'Neg_UI_0002', 
        input: 'badhulla-kolaBa dhumriya maargayee pe.va10.00ta pamaNa Dhaavanaya vunu dhumriya piilii paena anathurata lakviimen dhumriyee sitina jeevitha 300kata aDhila pirisakata barapathala thuvaala sidhu viya. ', 
        expected: 'බදුල්ල-කොලඹ දුම්රිය මාර්ගයේ පෙ.ව 10.00ට පමණ ධාවනය වුනු දුම්රිය පීලී පැන අනතුරට ලක්වීමෙන් දුම්‍රියේ සිටින ජේවිත 300කට අධිල පිරිසකට බරපතල තුවාල සිදු විය.'
    },

     { 
        id: 'Neg_UI_0003', 
        input: 'janaDhipathithumaa raesviimeedhii ratee kudaa dharuvan,tharuNayan vaedihitiyan mahalu aya yana siyalumadhenaagee saepa dhuk asaa baeliimata amathaka karee naehae. ee nisaa ethaena hitapu haemootama harima sathutuyi.', 
        expected: 'ජනධිපතිතුමා රැස්වීමේදී රටේ කුඩා දරුවන්,තරුණයන් වැඩිහිටියන් මහලු අය යන සියලුමදෙනාගේ සැප දුක් අසා බැලීමට අමතක කරේ නැහැ. ඒ නිසා එතැන හිටපු හැමෝටම හරිම සතුටු'

    },
 
    { 
        id: 'Neg_UI_0004', 
        input: 'aeththatama kivvoth viBhaagayak kiyannee baya venna oona dheyak nemeyi; api hariyata suudhaanam velaa, apee haekiyaava gaena vishvaasayak thiyaagaththoth eeka leesiyenma jaya ganna puLuvan. visheeShayenma api kaemathi viShayan gaena unandhuven igena gannakota eeka loku vinoodhayak venavaa. jiivithee saarThaka venna nam apita paehaedhili ilakkayak thiyennama oonee. ethakota vitharayi mona baaDhaa aavath nosaelii idhiriyatama gihin apita oona karana ee hoDHAma prathiPalaya labaaganna puLuvan vennee', 
        expected: 'ඇත්තටම කිව්වොත් විභාගයක් කියන්නේ බය වෙන්න ඕන දෙයක් නෙමෙයි; අපි හරියට සූදානම් වෙලා, අපේ හැකියාව ගැන විශ්වාසයක් තියාගත්තොත් ඒක ලේසියෙන්ම ජය ගන්න පුළුවන්. විශේෂයෙන්ම අපි කැමති විෂයන් ගැන උනන්දුවෙන් ඉගෙන ගන්නකොට ඒක ලොකු විනෝදයක් වෙනවා. ජීවිතේ සාර්ථක වෙන්න නම් අපිට පැහැදිලි ඉලක්කයක් තියෙන්නම ඕනේ. එතකොට විතරයි මොන බාධා ආවත් නොසැලී ඉදිරියටම ගිහින් අපිට ඕන කරන ඒ හොඳම ප්‍රතිඵලය ලබාගන්න පුළුවන් වෙන්න',

    },
      { 
        id: 'Neg_UI_0005', 
        input: 'mata nidhimathayi saha mata baya hithenavaa kiyala hithena velavata, mama TV eka off karala, lights poddak adu karala, phone eka side ekata daala nidi karanna try karanavaa, namuth vaessa vahina handa saha bahira saththu ge sabda nisaa nidi eka hariyata ennee naee kiyala mata therenavaa. ', 
        expected: 'මට නිදිමතයි වගේම බය හිතෙනවා කියලා දැනෙන වෙලාවට, මම ටීවී එක ඕෆ් කරලා, ලයිට්ස් පොඩ්ඩක් අඩු කරලා, ෆෝන් එකත් පැත්තකින් තියලා නිදාගන්න උත්සාහ කරනවා. ඒත් වැස්ස වහින සද්දයයි, පිටත ඉන්න සත්තුන්ගේ සද්දයි නිසා නින්ද හරියට එන්නේ නැහැ කියලා මට තේරෙනවා' 
    },
     { 
        id: 'Neg_UI_0006', 
        input: 'api lunch eken passe podi break ekak aran lecture hall ekata ikmanata giya ', 
        expected: 'අපි lunch එකෙන් පස්සෙ පොඩි break එකක් අරන් lecture hall එකට ඉක්මනට ගියා'
    },
   
     { 
        id: 'Neg_UI_0007', 
        input: 'iiyee raathriyee power cut ekak thibuNa nisaa laptop eka charge karanna amaaru vuNath, mobile hotspot eka use karalaa assignment submit karanna mama avasaana mohothee saarThaka vuNaa.', 
        expected: 'ඊයේ රාත්‍රියේ power cut එකක් තිබුණ නිසා laptop එක charge කරන්න අමාරු වුණත්, mobile hotspot එක use කරලා assignment submit කරන්න මම අවසාන මොහොතේ සාර්ථක වුණා.'
    },
     
    
     { 
        id: 'Neg_UI_0008', 
        input: ' adha mama campus giyee nae mokadha kivvoth  mata udhee saniipa naethi unaa ', 
        expected: 'අද මම campus ගියේ නැ මොකද කිව්වොත්  මට උදේ සනීප නැති උනා '
    },
    
     { 
        id: 'Neg_UI_0009', 
        input: ' oyaa ee vaedee hari lassanata karalaa anee ', 
        expected: 'ඔයා ඒ වැඩේ හරි ලස්සනට කරලා අනේ '
    },
     { 
        id: 'Neg_UI_0010', 
        input: 'mata eeka hariyata therum ganna kalayak giyaa', 
        expected: 'මට ඒක හරියට තෙරුම් ගන්න කලයක් ගියා' 
    },
    
];
test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(1000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(3000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});