/*
මෙම ක්‍රමලෙඛනය එක්ස්ප්‍රෙස් සින්හල පරිවර්තනය පරික්ශා කිරීම සන්දහා ලියන ලද්දකි. 
මෙය නිශ්පාදන පරිසරයේ ක්‍රියාත්මක කිරීම අනතුරුදායක විය හෑකිය. 
එම නිසා දන්න එක්ස්ප්‍රෙස් වලින් කොඩ් කිරීම වඩා හොන්දය.
*/

//ලය්බ්‍රරී ටික ඉම්පොර්ට් කරන විදිහ
const එක්ස්ප්‍රස් = require("./index.js");
const ඈප්එක = එක්ස්ප්‍රස්.ට්‍රාන්ස්ලේට්(require('express'));
const කොන්සොල් = එක්ස්ප්‍රස්.කොන්සොල්;

//රෙස්ට් ගෙට් රවුට් එකක් හදන විදිහ
ඈප්එක.ගන්න('/', (එනපනිවිඩය,යනපනිවිඩය)=>{
  යනපනිවිඩය.send('අයුබොවන් ලොකය');
});

//රෙස්ට් පොස්ට් රවුට් එකක් හදන විදිහ
ඈප්එක.අරින්න('/', (එනපනිවිඩය,යනපනිවිඩය)=>{
  යනපනිවිඩය.send('පොස්ට් එක අවා');
});

//රෙස්ට් පුට් රවුට් එකක් හදන විදිහ
ඈප්එක.තියන්න('/', (එනපනිවිඩය,යනපනිවිඩය)=>{
  යනපනිවිඩය.send('පුට් එක අවා');
});

//රෙස්ට් ඩිලීට් රවුට් එකක් හදන විදිහ
ඈප්එක.මකන්න('/', (එනපනිවිඩය,යනපනිවිඩය)=>{
  යනපනිවිඩය.send('ඩිලීට් එක අවා');
});

//පොර්ට් අරින විදිහ
ඈප්එක.පොර්ට්එකඅරින්න(3000, () => {
  කොන්සොල්.ලියන්න(`ඈප් එක පොර්ට් 3000 එකේ ඈරිලා තියනවා`);
});

