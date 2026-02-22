'use client';

import { useState } from 'react';

// Enhanced sermon data structure
interface Sermon {
  title: string;
  audioUrl: string;
  series: string;
  year: number;
  date?: string;
  thumbnail?: string;
  speaker?: string;
}

const sermons: Sermon[] = [
  // Open Doors Series
  { title: "OPEN DOORS - Track 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/OPEN%20DOORS%20%20Track%201.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 2", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20-%20Track%202.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 3", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%203.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 4", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20-%20Track%204.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 5", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%205.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 6", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%206.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Open Doors - Track 7", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20Track%207.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

  // The Joy of the Lord Series
  { title: "The Joy of the Lord - Track 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%201.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 2", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%202.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 3", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%203.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 4", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%204.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 5", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%205.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 6", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%206.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 7", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%207.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 8", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%208.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 9", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%209.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 10", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2010.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 11", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2011.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 12", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2012.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 13", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2013.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 14", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2014.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 15", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2015.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 16", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2016.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 17", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2017.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 18", audioUrl: "https://archive.org/download/elgcc-teachings-2026/The%20Joy%20of%20the%20Lord%20-%20Track%2018.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 19", audioUrl: "https://archive.org/download/elgcc-teachings-2026/The%20Joy%20of%20the%20Lord%20-%20Track%2019.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 20", audioUrl: "https://archive.org/download/elgcc-teachings-2026/The%20Joy%20of%20the%20Lord%20-%20Track%2020.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 21", audioUrl: "https://archive.org/download/elgcc-teachings-2026/The%20Joy%20of%20the%20Lord%20-%20Track%2021.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Joy of the Lord - Track 22", audioUrl: "https://archive.org/download/elgcc-teachings-2026/The%20Joy%20of%20the%20Lord%20-%20Track%2022.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },

  // Psalms Series
  { title: "Psalms by Pastor 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%201.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Psalms 4th Feb", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/psalms%204th%20feb.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Psalms by Pastor Yewande (16th Jan 2026) - it is my year of the open doors", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%20Yewande%20%2816th%20Jan%202026%29-%20it%20is%20my%20year%20of%20the%20open%20doors.mp3", series: "Psalms", year: 2026, speaker: "Pastor Yewande" },
  { title: "Psalms by Pastor (16th Jan 2026) - The Honor of the Lord", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20Honor%20of%20the%20Lord.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Psalms by Pastor (16th Jan 2026) - The doors are opened", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20doors%20are%20opened.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },


  // Special Messages
  { title: "January 2026 Healing Meeting", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/January%202026%20Healing%20Meeting.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
  { title: "Joy of the Lord (Impartation and prophecy 11th February 2026)", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Joy%20of%20the%20Lord%20%28Impartation%20and%20prophecy%2011th%20February%202026%29.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

  // Believers Authority Series 2026
  { title: "Believers Authority - Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2026/Believers%20Authority%20-Track%201.mp3", series: "Believers Authority", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Believers Authority - Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2026/Believers%20Authority%20-Track%202.mp3", series: "Believers Authority", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Believers Authority - Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2026/Believers%20Authority-%20Track%203.mp3", series: "Believers Authority", year: 2026, speaker: "Stephen Tijesuni Oyagbile" },



  // 2016 Sermons - All Series
  { title: "05. Infallible Proofs  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/05.%20Infallible%20Proofs-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "06. Walking in Dominion  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/06.%20Walking%20in%20Dominion-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "07. Staying Focused on Purpose  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/07.%20Staying%20Focused%20on%20Purpose-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "08. The Spirit of Prophecy  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/08.%20The%20Spirit%20of%20Prophecy-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "11. The Authority of Scriptures  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/11.%20The%20Authority%20of%20Scriptures-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "12. Doctrine of Eternal Security  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/12.%20Doctrine%20of%20Eternal%20Security-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "13. Established in Righteousness  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/13.%20Established%20in%20Righteousness-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "15. The Believer's Authority  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/15.%20The%20Believer%27s%20Authority-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "16. Walking in Love as Believers  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/16.%20Walking%20in%20Love%20as%20Believers-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "17. Keeping the Devil Far Away  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/17.%20Keeping%20the%20Devil%20Far%20Away-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "19. Living in Honour  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/19.%20Living%20in%20Honour-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "25. Jesus Christ; The Explanation of All Things  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/25.%20Jesus%20Christ%3B%20The%20Explanation%20of%20All%20Things-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "38. The Accomplishment of God's Plan  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/38.%20The%20Accomplishment%20of%20God%27s%20Plan-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "41. Dominion Over Sicknesses  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/41.%20Dominion%20Over%20Sicknesses-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "49. Jesus, Our Worship  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/49.%20Jesus%2C%20Our%20Worship-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "58. The Hardening of Pharaoh's Heart  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/58.%20The%20Hardening%20of%20Pharaoh%27s%20Heart-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "59. Joy and the Believer in Christ  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/59.%20Joy%20and%20the%20Believer%20in%20Christ-%20Pastor%20Stephen.mp3", series: "General Teachings", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "20. New Creation Realities I (The Reality of the Word)  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/NEW%20CREATION%20REALITIES/20.%20New%20Creation%20Realities%20I%20%28The%20Reality%20of%20the%20Word%29-%20Pastor%20Stephen.mp3", series: "NEW CREATION REALITIES", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "21. New Creation Realities II (The Reality of Our Righteousness)  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/NEW%20CREATION%20REALITIES/21.%20New%20Creation%20Realities%20II%20%28The%20Reality%20of%20Our%20Righteousness%29-%20Pastor%20Stephen.mp3", series: "NEW CREATION REALITIES", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "22. New Creation Realities III (The Reality of Our Redemption)  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/NEW%20CREATION%20REALITIES/22.%20New%20Creation%20Realities%20III%20%28The%20Reality%20of%20Our%20Redemption%29-%20Pastor%20Stephen.mp3", series: "NEW CREATION REALITIES", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "23. New Creation Realities IV (The Reality of Our Authority in Christ)  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/NEW%20CREATION%20REALITIES/23.%20New%20Creation%20Realities%20IV%20%28The%20Reality%20of%20Our%20Authority%20in%20Christ%29-%20Pastor%20Stephen.mp3", series: "NEW CREATION REALITIES", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "24. New Creation Realities V (The Reality of the Indwelling Spirit)  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/NEW%20CREATION%20REALITIES/24.%20New%20Creation%20Realities%20V%20%28The%20Reality%20of%20the%20Indwelling%20Spirit%29-%20Pastor%20Stephen.mp3", series: "NEW CREATION REALITIES", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Committment to Christ   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Our%20Commitment%20to%20Christ/Our%20Committment%20to%20Christ%20-%20Track%201.mp3", series: "Our Commitment to Christ", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Committment to Christ   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Our%20Commitment%20to%20Christ/Our%20Committment%20to%20Christ%20-%20Track%202.mp3", series: "Our Commitment to Christ", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Consecration to the Lord   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Our%20Consecration%20to%20the%20Lord/Our%20Consecration%20to%20the%20Lord%20-%20Track%201.mp3", series: "Our Consecration to the Lord", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Consecration to the Lord   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Our%20Consecration%20to%20the%20Lord/Our%20Consecration%20to%20the%20Lord%20-%20Track%202.mp3", series: "Our Consecration to the Lord", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Salvation & Service", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Salvation%20%26%20Service/Salvation%20%26%20Service.mp3", series: "Salvation & Service", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The New Testament Ministry   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/The%20New%20Testament%20Minitsry/The%20New%20Testament%20Ministry%20-%20Track%201.mp3", series: "The New Testament Minitsry", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The New Testament Ministry   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/The%20New%20Testament%20Minitsry/The%20New%20Testament%20Ministry%20-%20Track%202.mp3", series: "The New Testament Minitsry", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Righteousness of God   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/The%20Righteousness%20of%20God/The%20Righteousness%20of%20God%20-%20Track%201.mp3", series: "The Righteousness of God", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Righteousness of God   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/The%20Righteousness%20of%20God/The%20Righteousness%20of%20God%20-%20Track%202.mp3", series: "The Righteousness of God", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Righteousness of God   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/The%20Righteousness%20of%20God/The%20Righteousness%20of%20God%20-%20Track%203.mp3", series: "The Righteousness of God", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%201.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%202.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%203.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%204.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%205.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding the Old Testament & New Testament   Track 6", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Understanding%20the%20OT%20%26%20NT/Understanding%20the%20Old%20Testament%20%26%20New%20Testament%20-%20Track%206.mp3", series: "Understanding the OT & NT", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "77. The Work of the Gospel  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Work%20of%20the%20Gospel/77.%20The%20Work%20of%20the%20Gospel-%20Pastor%20Stephen.mp3", series: "Work of the Gospel", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "78. The Work of the Gospel II  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2016/C%3A/Sermons/2016/Work%20of%20the%20Gospel/78.%20The%20Work%20of%20the%20Gospel%20II-%20Pastor%20Stephen.mp3", series: "Work of the Gospel", year: 2016, speaker: "Stephen Tijesuni Oyagbile" },

  // 2017 Sermons - All Series
  { title: "Apt to Teach Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Apt%20to%20Teach/Apt%20to%20Teach%20Track%201.mp3", series: "Apt to Teach", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Apt to Teach Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Apt%20to%20Teach/Apt%20to%20Teach%20Track%202.mp3", series: "Apt to Teach", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BORN OF THE SPIRIT, explaining the Christian Life", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Born%20of%20the%20Spirit/BORN%20OF%20THE%20SPIRIT%2C%20explaining%20the%20Christian%20Life.mp3", series: "Born of the Spirit", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Dealing With Offence in the Local Church", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Dealing%20With%20Offence%20in%20the%20Local%20Church.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Discipleship   Pastor Stephen Oyagbile", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Discipleship%20-%20Pastor%20Stephen%20Oyagbile.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/ECCLESIOLOGY%20series%201/Ecclesiology%20Series%201.mp3", series: "ECCLESIOLOGY series 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Faith in the Gospel of Christ (Discerning Materialism)", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Faith%20in%20the%20Gospel%20of%20Christ%20%28Discerning%20Materialism%29.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following God's Will for Your Life", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Following%20God%27s%20Will%20for%20Your%20Life.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "01. Fulfilling Our Purpose I  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Fulfilling%20Our%20Purpose/01.%20Fulfilling%20Our%20Purpose%20I-%20Pastor%20Stephen.mp3", series: "Fulfilling Our Purpose", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "02. Fulfilling Our Purpose II  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Fulfilling%20Our%20Purpose/02.%20Fulfilling%20Our%20Purpose%20II-%20Pastor%20Stephen.mp3", series: "Fulfilling Our Purpose", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Investigating God's Nature Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/INVESTIGATING%20GOD%27S%20NATURE/Investigating%20God%27s%20Nature%20Track%201.mp3", series: "INVESTIGATING GOD'S NATURE", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Investigating God's Nature Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/INVESTIGATING%20GOD%27S%20NATURE/Investigating%20God%27s%20Nature%20Track%202.mp3", series: "INVESTIGATING GOD'S NATURE", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Investigating God's Nature Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/INVESTIGATING%20GOD%27S%20NATURE/Investigating%20God%27s%20Nature%20Track%203.mp3", series: "INVESTIGATING GOD'S NATURE", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Knowing the Father's Nature   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Knowing%20the%20Father%27s%20Nature/Knowing%20the%20Father%27s%20Nature%20-%20Track%201.mp3", series: "Knowing the Father's Nature", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Knowing the Father's Nature   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Knowing%20the%20Father%27s%20Nature/Knowing%20the%20Father%27s%20Nature%20-%20Track%202.mp3", series: "Knowing the Father's Nature", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Knowing the Father's Nature   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Knowing%20the%20Father%27s%20Nature/Knowing%20the%20Father%27s%20Nature%20-%20Track%203.mp3", series: "Knowing the Father's Nature", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Making Power Available Through Prayer", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Making%20Power%20Available%20Through%20Prayer.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "New Testament Worship   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/NEW%20TESTAMENT%20WORSHIP/New%20Testament%20Worship%20-%20Track%201.mp3", series: "NEW TESTAMENT WORSHIP", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "New Testament Worship   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/NEW%20TESTAMENT%20WORSHIP/New%20Testament%20Worship%20-%20Track%202.mp3", series: "NEW TESTAMENT WORSHIP", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "New Testament Worship   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/NEW%20TESTAMENT%20WORSHIP/New%20Testament%20Worship%20-%20Track%203.mp3", series: "NEW TESTAMENT WORSHIP", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%201.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%202.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%203.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%204.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%205.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 6", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%206.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 7", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%207.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Salvation in Christ Jesus Series 1   Track 8", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SALVATION%20IN%20CHRIST%20SERIES%201/Our%20Salvation%20in%20Christ%20Jesus%20Series%201%20-%20Track%208.mp3", series: "OUR SALVATION IN CHRIST SERIES 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Service Unto the Lord   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SERVICE%20UNTO%20THE%20LORD/Our%20Service%20Unto%20the%20Lord%20-%20Track%201.mp3", series: "OUR SERVICE UNTO THE LORD", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Service Unto the Lord   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SERVICE%20UNTO%20THE%20LORD/Our%20Service%20Unto%20the%20Lord%20-%20Track%202.mp3", series: "OUR SERVICE UNTO THE LORD", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Our Service Unto the Lord   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/OUR%20SERVICE%20UNTO%20THE%20LORD/Our%20Service%20Unto%20the%20Lord%20-%20Track%203.mp3", series: "OUR SERVICE UNTO THE LORD", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Preaching the Gospel   Track  1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/PREACHING%20THE%20GOSPEL%201/Preaching%20the%20Gospel%20-%20Track%20%201.mp3", series: "PREACHING THE GOSPEL 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Preaching the Gospel   Track  2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/PREACHING%20THE%20GOSPEL%201/Preaching%20the%20Gospel%20-%20Track%20%202.mp3", series: "PREACHING THE GOSPEL 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Preaching the Gospel   Track  3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/PREACHING%20THE%20GOSPEL%201/Preaching%20the%20Gospel%20-%20Track%20%203.mp3", series: "PREACHING THE GOSPEL 1", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Placing Value on Christian Meetings", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Placing%20Value%20on%20Christian%20Meetings.mp3", series: "General Teachings", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Prayers 2017 (Track 1)", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Prayers%20Series%20%20Pastor%20Stephen/2017/Prayers-2017%20%28Track%201%29.mp3", series: "Prayers Series  Pastor Stephen", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Prayers 2017 (Track 2)", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Prayers%20Series%20%20Pastor%20Stephen/2017/Prayers-2017%20%28Track%202%29.mp3", series: "Prayers Series  Pastor Stephen", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Prayers 2017 (Track 3)", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Prayers%20Series%20%20Pastor%20Stephen/2017/Prayers-2017%20%28Track%203%29.mp3", series: "Prayers Series  Pastor Stephen", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Prayers 2017 (Track 4)", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Prayers%20Series%20%20Pastor%20Stephen/2017/Prayers-2017%20%28Track%204%29.mp3", series: "Prayers Series  Pastor Stephen", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Gifts   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Gifts/Spiritual%20Gifts%20-%20Track%201.mp3", series: "Spiritual Gifts", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Gifts   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Gifts/Spiritual%20Gifts%20-%20Track%202.mp3", series: "Spiritual Gifts", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Gifts   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Gifts/Spiritual%20Gifts%20-%20Track%203.mp3", series: "Spiritual Gifts", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Gifts   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Gifts/Spiritual%20Gifts%20-%20Track%204.mp3", series: "Spiritual Gifts", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Gifts   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Gifts/Spiritual%20Gifts%20-%20Track%205.mp3", series: "Spiritual Gifts", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Growth   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Growth/Spiritual%20Growth%20-%20Track%201.mp3", series: "Spiritual Growth", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Growth   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Growth/Spiritual%20Growth%20-%20Track%202.mp3", series: "Spiritual Growth", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Growth   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Growth/Spiritual%20Growth%20-%20Track%203.mp3", series: "Spiritual Growth", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Growth   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Growth/Spiritual%20Growth%20-%20Track%204.mp3", series: "Spiritual Growth", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Spiritual Growth   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2017/Spiritual%20Growth/Spiritual%20Growth%20-%20Track%205.mp3", series: "Spiritual Growth", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Precious Gift of the Spirit", audioUrl: "https://archive.org/download/elgcc-teachings-2017/THE%20PRECIOUS%20GIFT%20OF%20THE%20SPIRIT/The%20Precious%20Gift%20of%20the%20Spirit.mp3", series: "THE PRECIOUS GIFT OF THE SPIRIT", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Understanding Giving", audioUrl: "https://archive.org/download/elgcc-teachings-2017/UNDERSTANDING%20GIVING/Understanding%20Giving.mp3", series: "UNDERSTANDING GIVING", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What Happened in Christ   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2017/WHAT%20HAPPENED%20IN%20CHRIST/What%20Happened%20in%20Christ%20-%20Track%201.mp3", series: "WHAT HAPPENED IN CHRIST", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What Happened in Christ   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2017/WHAT%20HAPPENED%20IN%20CHRIST/What%20Happened%20in%20Christ%20-%20Track%202.mp3", series: "WHAT HAPPENED IN CHRIST", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What Happened in Christ   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2017/WHAT%20HAPPENED%20IN%20CHRIST/What%20Happened%20in%20Christ%20-%20Track%203.mp3", series: "WHAT HAPPENED IN CHRIST", year: 2017, speaker: "Stephen Tijesuni Oyagbile" },

  // 2018 Sermons - All Series
  { title: "CHRISTIAN REWARDS", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIAN%20REWARDS/CHRISTIAN%20REWARDS.mp3", series: "CHRISTIAN REWARDS", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%203.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%201.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%202.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%203.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%204.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%205.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR%20TRACK%206.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY AND HONOUR", audioUrl: "https://archive.org/download/elgcc-teachings-2018/CHRISTIANITY%20AND%20HONOUR/CHRISTIANITY%20AND%20HONOUR.mp3", series: "CHRISTIANITY AND HONOUR", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE COST OF DISCIPLESHIP 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/COST%20OF%20DISCIPLESHIP/THE%20COST%20OF%20DISCIPLESHIP%201.mp3", series: "COST OF DISCIPLESHIP", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE COST OF DISCIPLESHIP 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/COST%20OF%20DISCIPLESHIP/THE%20COST%20OF%20DISCIPLESHIP%202.mp3", series: "COST OF DISCIPLESHIP", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY & MATERIAL WEALTH TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Christianity%20and%20Material%20Wealth/CHRISTIANITY%20%26%20MATERIAL%20WEALTH%20TRACK%201.mp3", series: "Christianity and Material Wealth", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY & MATERIAL WEALTH TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Christianity%20and%20Material%20Wealth/CHRISTIANITY%20%26%20MATERIAL%20WEALTH%20TRACK%202.mp3", series: "Christianity and Material Wealth", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY & MATERIAL WEALTH TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Christianity%20and%20Material%20Wealth/CHRISTIANITY%20%26%20MATERIAL%20WEALTH%20TRACK%203.mp3", series: "Christianity and Material Wealth", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIANITY & MATERIAL WEALTH TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Christianity%20and%20Material%20Wealth/CHRISTIANITY%20%26%20MATERIAL%20WEALTH%20TRACK%204.mp3", series: "Christianity and Material Wealth", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Consecration", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Consecration.mp3", series: "General Teachings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Discipleship (Following up on Saints)", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Discipleship%20%28Following%20up%20on%20Saints%29.mp3", series: "General Teachings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%201.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 10", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2010.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 11", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2011.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 12", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2012.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 13", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2013.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 14", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2014.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 15", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2015.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 16", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2016.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 17 (NULL)", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2017%20%28NULL%29.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 17", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2017.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 18", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2018.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 19", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2019.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%202.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 20", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2020.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 21", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2021.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 22", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2022.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 23", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2023.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 24", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2024.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 25", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2025.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 26", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2026.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 27", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2027.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 28", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2028.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 29", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2029.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%203.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 30", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2030.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 31", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2031.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 32", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2032.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 33", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2033.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 34", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2034.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 35", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2035.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 36", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2036.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 37", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2037.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 38", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2038.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 39", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2039.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%204.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 40", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%2040.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%205.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 6", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%206.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 7", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%207.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 8", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%208.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Explaining the Old Testament   Track 9", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Explaining%20the%20Old%20Testament%20Series/Explaining%20the%20Old%20Testament%20-%20Track%209.mp3", series: "Explaining the Old Testament Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "I BELIEVE IN MIRACLES", audioUrl: "https://archive.org/download/elgcc-teachings-2018/I%20BELIEVE%20IN%20MIRACLES/I%20BELIEVE%20IN%20MIRACLES.mp3", series: "I BELIEVE IN MIRACLES", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "My Love Walk Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20LOVE%20WALK/My%20Love%20Walk%20Track%201.mp3", series: "MY LOVE WALK", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "My Love Walk Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20LOVE%20WALK/My%20Love%20Walk%20Track%202.mp3", series: "MY LOVE WALK", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "My Love Walk Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20LOVE%20WALK/My%20Love%20Walk%20Track%203.mp3", series: "MY LOVE WALK", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "My Love Walk Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20LOVE%20WALK/My%20Love%20Walk%20Track%204.mp3", series: "MY LOVE WALK", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "My Love Walk Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20LOVE%20WALK/My%20Love%20Walk%20Track%205.mp3", series: "MY LOVE WALK", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MY MINISTRY OF LAYING HANDS", audioUrl: "https://archive.org/download/elgcc-teachings-2018/MY%20MINISTRY%20OF%20LAYING%20OF%20HANDS/MY%20MINISTRY%20OF%20LAYING%20HANDS.mp3", series: "MY MINISTRY OF LAYING OF HANDS", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ministers of the Spirit I  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Ministers%20of%20the%20Spirit/Ministers%20of%20the%20Spirit%20I-%20Pastor%20Stephen.mp3", series: "Ministers of the Spirit", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ministers of the Spirit II  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Ministers%20of%20the%20Spirit/Ministers%20of%20the%20Spirit%20II-%20Pastor%20Stephen.mp3", series: "Ministers of the Spirit", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ministers of the Spirit III  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Ministers%20of%20the%20Spirit/Ministers%20of%20the%20Spirit%20III-%20Pastor%20Stephen.mp3", series: "Ministers of the Spirit", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ministers of the Spirit IV  Pastor Stephen", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Ministers%20of%20the%20Spirit/Ministers%20of%20the%20Spirit%20IV-%20Pastor%20Stephen.mp3", series: "Ministers of the Spirit", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS", audioUrl: "https://archive.org/download/elgcc-teachings-2018/PRAYERS.mp3", series: "General Teachings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "75. Participating in Christian Gatherings Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Participating%20in%20Christian%20Gatherings/75.%20Participating%20in%20Christian%20Gatherings%20Track%201.mp3", series: "Participating in Christian Gatherings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "76. Participating in Christian Gatherings Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/Participating%20in%20Christian%20Gatherings/76.%20Participating%20in%20Christian%20Gatherings%20Track%202.mp3", series: "Participating in Christian Gatherings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SIGHTS AND SOUNDS IN THE SUPERNATURAL", audioUrl: "https://archive.org/download/elgcc-teachings-2018/SIGHTS%20AND%20SOUNDS%20IN%20THE%20SUPERNATURAL/SIGHTS%20AND%20SOUNDS%20IN%20THE%20SUPERNATURAL.mp3", series: "SIGHTS AND SOUNDS IN THE SUPERNATURAL", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PASSION OF THE CHURCH 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20PASSION%20OF%20THE%20CHURCH/THE%20PASSION%20OF%20THE%20CHURCH%201.mp3", series: "THE PASSION OF THE CHURCH", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PASSION OF THE CHURCH 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20PASSION%20OF%20THE%20CHURCH/THE%20PASSION%20OF%20THE%20CHURCH%202.mp3", series: "THE PASSION OF THE CHURCH", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PASSION OF THE CHURCH 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20PASSION%20OF%20THE%20CHURCH/THE%20PASSION%20OF%20THE%20CHURCH%203.mp3", series: "THE PASSION OF THE CHURCH", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE POWER OF EXPECTATION", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20POWER%20OF%20EXPECTATION.mp3", series: "General Teachings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%201.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%202.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%203.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%204.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 5", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%205.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE REALITY OF ETERNAL LIFE 6", audioUrl: "https://archive.org/download/elgcc-teachings-2018/THE%20REALITY%20OF%20ETERNAL%20LIFE/THE%20REALITY%20OF%20ETERNAL%20LIFE%206.mp3", series: "THE REALITY OF ETERNAL LIFE", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Culture of Soul winning Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Culture%20of%20Soul-winning%20Series/The%20Culture%20of%20Soul-winning%20Track%201.mp3", series: "The Culture of Soul-winning Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Culture of Soul winning Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Culture%20of%20Soul-winning%20Series/The%20Culture%20of%20Soul-winning%20Track%202.mp3", series: "The Culture of Soul-winning Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Culture of Soul winning Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Culture%20of%20Soul-winning%20Series/The%20Culture%20of%20Soul-winning%20Track%203.mp3", series: "The Culture of Soul-winning Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Culture of Soul winning Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Culture%20of%20Soul-winning%20Series/The%20Culture%20of%20Soul-winning%20Track%204.mp3", series: "The Culture of Soul-winning Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Culture of Soul winning Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Culture%20of%20Soul-winning%20Series/The%20Culture%20of%20Soul-winning%20Track%205.mp3", series: "The Culture of Soul-winning Series", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Gospel of Christ   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Gospel%20of%20Christ/The%20Gospel%20of%20Christ%20-%20Track%201.mp3", series: "The Gospel of Christ", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Gospel of Christ   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Gospel%20of%20Christ/The%20Gospel%20of%20Christ%20-%20Track%202.mp3", series: "The Gospel of Christ", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Mission is Possible (1)", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Mission%20is%20Possible/The%20Mission%20is%20Possible%20%281%29.mp3", series: "The Mission is Possible", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Mission is Possible (2)", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Mission%20is%20Possible/The%20Mission%20is%20Possible%20%282%29.mp3", series: "The Mission is Possible", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Mission is Possible (Utterance)", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Mission%20is%20Possible/The%20Mission%20is%20Possible%20%28Utterance%29.mp3", series: "The Mission is Possible", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Power Of Consistency", audioUrl: "https://archive.org/download/elgcc-teachings-2018/The%20Power%20Of%20Consistency.mp3", series: "General Teachings", year: 2018, speaker: "Stephen Tijesuni Oyagbile" },

  // 2019 Sermons - All Series
  { title: "ACCOUNTABILITY (WHAT IT MEANS) 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29%201.mp3", series: "ACCOUNTABILITY (WHAT IT MEANS)", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "ACCOUNTABILITY (WHAT IT MEANS) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29%202.mp3", series: "ACCOUNTABILITY (WHAT IT MEANS)", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "ACCOUNTABILITY (WHAT IT MEANS) 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29/ACCOUNTABILITY%20%28WHAT%20IT%20MEANS%29%203.mp3", series: "ACCOUNTABILITY (WHAT IT MEANS)", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Christ Our Sufficiency", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christ-Our-Sufficiency.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT MUCH MORE TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christian%20Commitment%20Much%20More/COMMITMENT%20MUCH%20MORE%20TRACK%201.mp3", series: "Christian Commitment Much More", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT MUCH MORE TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christian%20Commitment%20Much%20More/COMMITMENT%20MUCH%20MORE%20TRACK%202.mp3", series: "Christian Commitment Much More", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT MUCH MORE TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christian%20Commitment%20Much%20More/COMMITMENT%20MUCH%20MORE%20TRACK%203.mp3", series: "Christian Commitment Much More", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT MUCH MORE TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christian%20Commitment%20Much%20More/COMMITMENT%20MUCH%20MORE%20TRACK%204.mp3", series: "Christian Commitment Much More", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT MUCH MORE TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Christian%20Commitment%20Much%20More/COMMITMENT%20MUCH%20MORE%20TRACK%205.mp3", series: "Christian Commitment Much More", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019 D  A life of Consecration", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019%20D-%20A%20life%20of%20Consecration.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019 E Sensitivity of the Heart (Making Sound Judgement", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019%20E%20Sensitivity%20of%20the%20Heart%20%28Making%20Sound%20Judgement.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019 F Supernatural Relationship", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019%20F-Supernatural%20Relationship.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019 G Follow after love", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019%20G%20Follow%20after%20love.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019A Discipling Nations", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019A-Discipling%20Nations.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019B  Unity of Purpose", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019B%20-Unity%20of%20Purpose.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Retreat 2019C Keeping the Zeal", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Church%20Retreat%20%20August%202019/Retreat%202019C-Keeping%20the%20Zeal.mp3", series: "Church Retreat  August 2019", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "DOES IT MATTER, THE DANGER OF INSENSITIVITY", audioUrl: "https://archive.org/download/elgcc-teachings-2019/DOES%20IT%20MATTER%2C%20THE%20DANGER%20OF%20INSENSITIVITY.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%201.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%202.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%203.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%205.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 6", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%206.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 7", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%207.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 Track 8", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20Track%208.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Ecclesiology Series 2 track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/ECCLESIOLOGY%20series%202/Ecclesiology%20Series%202%20track%204.mp3", series: "ECCLESIOLOGY series 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXERCISE THYSELF UNTO GODLINESS", audioUrl: "https://archive.org/download/elgcc-teachings-2019/EXERCISE%20THYSELF%20UNTO%20GODLINESS.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Edification by Pastor 17022019", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Edification%20by%20Pastor%2017022019.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of God's Spirit Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20God%27s%20Spirit%20Track%201.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of God's Spirit Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20God%27s%20Spirit%20Track%202.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of God's Spirit Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20God%27s%20Spirit%20Track%203.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of God's Spirit Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20God%27s%20Spirit%20Track%204.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of God's Spirit Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20God%27s%20Spirit%20Track%205.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Following the Leading of the Spirit (Q&A) Wednesday 20022019", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Following%20the%20Leading%20of%20God%27s%20Spirit/Following%20the%20Leading%20of%20the%20Spirit%20%28Q%26A%29%20Wednesday%2020022019.mp3", series: "Following the Leading of God's Spirit", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%201.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%202.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%203.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%204.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%205.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INVESTIGATING THE FATHER'S NATURE 6", audioUrl: "https://archive.org/download/elgcc-teachings-2019/INVESTIGATING%20THE%20FATHER%27S%20NATURE/INVESTIGATING%20THE%20FATHER%27S%20NATURE%206.mp3", series: "INVESTIGATING THE FATHER'S NATURE", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%201.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2010.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2011.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2012.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2013.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2014.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2015.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2016.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2017.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2018.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2019.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%202.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 20 (INCOMPLETE)", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2020%20%28INCOMPLETE%29.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 20", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2020.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 21", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2021.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 22", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2022.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 23", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2023.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 24 (INCOMPLETE)", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2024%20%28INCOMPLETE%29.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 24", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%2024.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%203.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%204.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%205.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%206.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%207.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%208.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SALVATION IN CHRIST JESUS (SERIES 2)  TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2019/OUR%20SALVATION%20IN%20CHRIST%20SERIES%202/OUR%20SALVATION%20IN%20CHRIST%20JESUS%20%28SERIES%202%29%20%20TRACK%209.mp3", series: "OUR SALVATION IN CHRIST SERIES 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%201.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2010.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2011.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2012.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2013.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2014.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2015.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2016.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2017.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2018.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2019.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%202.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 20", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2020.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 21", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2021.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%203.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%204.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%205.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%206.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%207.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%208.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2019/Our%20Supernatural%20faculties/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%209.mp3", series: "Our Supernatural faculties", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYING FOR OTHER SAINTS", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PRAYING%20FOR%20OTHER%20SAINTS.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOPEL (INSTRUCTION BY PASTOR)", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOPEL%20%28INSTRUCTION%20BY%20PASTOR%29.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 1", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%201.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%202.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 3", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%203.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 4", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%204.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 5", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%205.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 6", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%206.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PREACHING THE GOSPEL (2) 7", audioUrl: "https://archive.org/download/elgcc-teachings-2019/PREACHING%20THE%20GOSPEL%202/PREACHING%20THE%20GOSPEL%20%282%29%207.mp3", series: "PREACHING THE GOSPEL 2", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURAL CONFIDENCE", audioUrl: "https://archive.org/download/elgcc-teachings-2019/SUPERNATURAL%20CONFIDENCE.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE ATTITUDE TO SPIRITUAL GROWTH", audioUrl: "https://archive.org/download/elgcc-teachings-2019/THE%20ATTITUDE%20TO%20SPIRITUAL%20GROWTH.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Power of Instruction", audioUrl: "https://archive.org/download/elgcc-teachings-2019/The%20Power%20of%20Instruction.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Wisdom of Discretion", audioUrl: "https://archive.org/download/elgcc-teachings-2019/The%20Wisdom%20of%20Discretion.mp3", series: "General Teachings", year: 2019, speaker: "Stephen Tijesuni Oyagbile" },

  // 2020 Sermons
  { title: "10. THE WISDOM OF GOD & THE WISDOM OF THIS WORLD; KNOWING THE DIFFERENCE", audioUrl: "https://archive.org/download/elgcc-teachings-2020/10.%20THE%20WISDOM%20OF%20GOD%20%26%20THE%20WISDOM%20OF%20THIS%20WORLD%3B%20KNOWING%20THE%20DIFFERENCE.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE COST OF THE WORK TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/11.%20THE%20COST%20OF%20THE%20WORK/THE%20COST%20OF%20THE%20WORK%20TRACK%201.mp3", series: "11. THE COST OF THE WORK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE COST OF THE WORK TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/11.%20THE%20COST%20OF%20THE%20WORK/THE%20COST%20OF%20THE%20WORK%20TRACK%202.mp3", series: "11. THE COST OF THE WORK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "12. TELL IT NOT IN GATH; LIVING IN THE FEAR OF GOD", audioUrl: "https://archive.org/download/elgcc-teachings-2020/12.%20TELL%20IT%20NOT%20IN%20GATH%3B%20LIVING%20IN%20THE%20FEAR%20OF%20GOD.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "ESTABLISHING THE LEADING OF THE SPIRIT; DWELLING IN CONVICTION AND CLARITY TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/13.%20ESTABLISHING%20THE%20LEADING%20OF%20THE%20SPIRIT%3B%20DWELLING%20IN%20CONVICTION%20AND%20CLARITY/ESTABLISHING%20THE%20LEADING%20OF%20THE%20SPIRIT%3B%20DWELLING%20IN%20CONVICTION%20AND%20CLARITY%20TRACK%201.mp3", series: "13. ESTABLISHING THE LEADING OF THE SPIRIT; DWELLING IN CONVICTION AND CLARITY", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "ESTABLISHING THE LEADING OF THE SPIRIT; DWELLING IN CONVICTION AND CLARITY TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/13.%20ESTABLISHING%20THE%20LEADING%20OF%20THE%20SPIRIT%3B%20DWELLING%20IN%20CONVICTION%20AND%20CLARITY/ESTABLISHING%20THE%20LEADING%20OF%20THE%20SPIRIT%3B%20DWELLING%20IN%20CONVICTION%20AND%20CLARITY%20TRACK%202.mp3", series: "13. ESTABLISHING THE LEADING OF THE SPIRIT; DWELLING IN CONVICTION AND CLARITY", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS BY PASTOR 23052020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/14.%20UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST/PSALMS%20BY%20PASTOR%2023052020.mp3", series: "14. UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/14.%20UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST/UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST%20TRACK%201.mp3", series: "14. UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/14.%20UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST/UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST%20TRACK%202.mp3", series: "14. UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 23052020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/14.%20UNDERSTANDING%20THE%20REWARD%20OF%20THE%20MINISTRY%20OF%20CHRIST/UTTERANCE%2023052020.mp3", series: "14. UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR TRUE REJOICING TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/15.%20OUR%20TRUE%20REJOICING/OUR%20TRUE%20REJOICING%20TRACK%201.mp3", series: "15. OUR TRUE REJOICING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR TRUE REJOICING TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/15.%20OUR%20TRUE%20REJOICING/OUR%20TRUE%20REJOICING%20TRACK%202.mp3", series: "15. OUR TRUE REJOICING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHERE TWO OR THREE ARE GATHERED; (UNDERSTANDING THE RELATIONSHIP IN CHRIST) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/16.%20WHERE%20TWO%20OR%20THREE%20ARE%20GATHERED%3B%20%28UNDERSTANDING%20THE%20RELATIONSHIP%20IN%20CHRIST%29/WHERE%20TWO%20OR%20THREE%20ARE%20GATHERED%3B%20%28UNDERSTANDING%20THE%20RELATIONSHIP%20IN%20CHRIST%29%20TRACK%201.mp3", series: "16. WHERE TWO OR THREE ARE GATHERED; (UNDERSTANDING THE RELATIONSHIP IN CHRIST)", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHERE TWO OR THREE ARE GATHERED; (UNDERSTANDING THE RELATIONSHIP IN CHRIST) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/16.%20WHERE%20TWO%20OR%20THREE%20ARE%20GATHERED%3B%20%28UNDERSTANDING%20THE%20RELATIONSHIP%20IN%20CHRIST%29/WHERE%20TWO%20OR%20THREE%20ARE%20GATHERED%3B%20%28UNDERSTANDING%20THE%20RELATIONSHIP%20IN%20CHRIST%29%20TRACK%202.mp3", series: "16. WHERE TWO OR THREE ARE GATHERED; (UNDERSTANDING THE RELATIONSHIP IN CHRIST)", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING AND SUSTAINING THE MINISTRY OF THE WORD TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/17.%20UNDERSTANDING%20AND%20SUSTAINING%20THE%20MINISTRY%20OF%20THE%20WORD/UNDERSTANDING%20AND%20SUSTAINING%20THE%20MINISTRY%20OF%20THE%20WORD%20TRACK%201.mp3", series: "17. UNDERSTANDING AND SUSTAINING THE MINISTRY OF THE WORD", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING AND SUSTAINING THE MINISTRY OF THE WORD TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/17.%20UNDERSTANDING%20AND%20SUSTAINING%20THE%20MINISTRY%20OF%20THE%20WORD/UNDERSTANDING%20AND%20SUSTAINING%20THE%20MINISTRY%20OF%20THE%20WORD%20TRACK%202.mp3", series: "17. UNDERSTANDING AND SUSTAINING THE MINISTRY OF THE WORD", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF GOD'S SPIRIT SERIES 2 TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/18.%20FOLLOWING%20THE%20LEADING%20OF%20GOD%27S%20SPIRIT%20SERIES/FOLLOWING%20THE%20LEADING%20OF%20GOD%27S%20SPIRIT%20SERIES%202%20TRACK%201.mp3", series: "18. FOLLOWING THE LEADING OF GOD'S SPIRIT SERIES", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF GOD'S SPIRIT SERIES 2 TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/18.%20FOLLOWING%20THE%20LEADING%20OF%20GOD%27S%20SPIRIT%20SERIES/FOLLOWING%20THE%20LEADING%20OF%20GOD%27S%20SPIRIT%20SERIES%202%20TRACK%202.mp3", series: "18. FOLLOWING THE LEADING OF GOD'S SPIRIT SERIES", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "19. THE BELIEVER'S IDENTITY; UNDERSTANDING WHO YOU TRULY ARE AND WHAT YOU TRULY HAVE", audioUrl: "https://archive.org/download/elgcc-teachings-2020/19.%20THE%20BELIEVER%27S%20IDENTITY%3B%20UNDERSTANDING%20WHO%20YOU%20TRULY%20ARE%20AND%20WHAT%20YOU%20TRULY%20HAVE.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%201.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%202.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%203.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%204.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%205.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%206.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYERS TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/PRAYERS%20TRACK%207.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WORDS BY PASTOR 19012020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/2.%20PRAYERS/WORDS%20BY%20PASTOR%2019012020.mp3", series: "2. PRAYERS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "21. THE LEADING OF THE SPIRIT IN HONOUR", audioUrl: "https://archive.org/download/elgcc-teachings-2020/21.%20THE%20LEADING%20OF%20THE%20SPIRIT%20IN%20HONOUR.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/22.%20FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK/FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK%20TRACK%201.mp3", series: "22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/22.%20FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK/FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK%20TRACK%202.mp3", series: "22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/22.%20FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK/FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK%20TRACK%203.mp3", series: "22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2020/22.%20FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK/FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK%20TRACK%204.mp3", series: "22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2020/22.%20FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK/FORBEARING%20ONE%20ANOTHER%20IN%20LOVE%3B%20UNDERSTANDING%20THE%20CHRISTIAN%20LOVE%20WALK%20TRACK%205.mp3", series: "22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYER AND OUR LOVE WALK TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK%20%28SERIES%201%29/PRAYER%20AND%20OUR%20LOVE%20WALK%20TRACK%201.mp3", series: "23. PRAYER AND OUR LOVEWALK (SERIES 1)", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYER AND OUR LOVE WALK TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK%20%28SERIES%201%29/PRAYER%20AND%20OUR%20LOVE%20WALK%20TRACK%202.mp3", series: "23. PRAYER AND OUR LOVEWALK (SERIES 1)", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Teaching 16082020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK%20%28SERIES%201%29/Teaching%2016082020.mp3", series: "23. PRAYER AND OUR LOVEWALK (SERIES 1)", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYER AND OUR LOVE WALK TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK/PRAYER%20AND%20OUR%20LOVE%20WALK%20TRACK%202.mp3", series: "23. PRAYER AND OUR LOVEWALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PRAYER AND OUR LOVEWALK TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK/PRAYER%20AND%20OUR%20LOVEWALK%20TRACK%201.mp3", series: "23. PRAYER AND OUR LOVEWALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Teaching 16082020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/23.%20PRAYER%20AND%20OUR%20LOVEWALK/Teaching%2016082020.mp3", series: "23. PRAYER AND OUR LOVEWALK", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HUMILITY TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/24.%20HUMILITY/HUMILITY%20TRACK%201.mp3", series: "24. HUMILITY", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HUMILITY TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/24.%20HUMILITY/HUMILITY%20TRACK%202.mp3", series: "24. HUMILITY", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HUMILITY TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/24.%20HUMILITY/HUMILITY%20TRACK%203.mp3", series: "24. HUMILITY", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "25. THE POWER OF INCONVENIENCE", audioUrl: "https://archive.org/download/elgcc-teachings-2020/25.%20THE%20POWER%20OF%20INCONVENIENCE.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO RECEIVE THE TRAINING OF THE SPIRIT OF GOD TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/26.%20HOW%20TO%20RECEIVE%20THE%20TRAINING%20OF%20THE%20SPIRIT%20OF%20GOD/HOW%20TO%20RECEIVE%20THE%20TRAINING%20OF%20THE%20SPIRIT%20OF%20GOD%20TRACK%201.mp3", series: "26. HOW TO RECEIVE THE TRAINING OF THE SPIRIT OF GOD", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO RECEIVE THE TRAINING OF THE SPIRIT OF GOD TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/26.%20HOW%20TO%20RECEIVE%20THE%20TRAINING%20OF%20THE%20SPIRIT%20OF%20GOD/HOW%20TO%20RECEIVE%20THE%20TRAINING%20OF%20THE%20SPIRIT%20OF%20GOD%20TRACK%202.mp3", series: "26. HOW TO RECEIVE THE TRAINING OF THE SPIRIT OF GOD", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "27. WHAT TO DO AFTER TRAINING OF THE SPIRIT", audioUrl: "https://archive.org/download/elgcc-teachings-2020/27.%20WHAT%20TO%20DO%20AFTER%20TRAINING%20OF%20THE%20SPIRIT.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING CHRISTIAN DISCIPLESHIP 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/28.%20UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP/UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP%201.mp3", series: "28. UNDERSTANDING CHRISTIAN DISCIPLESHIP", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING CHRISTIAN DISCIPLESHIP 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/28.%20UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP/UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP%202.mp3", series: "28. UNDERSTANDING CHRISTIAN DISCIPLESHIP", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING CHRISTIAN DISCIPLESHIP 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/28.%20UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP/UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP%203.mp3", series: "28. UNDERSTANDING CHRISTIAN DISCIPLESHIP", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNDERSTANDING CHRISTIAN DISCIPLESHIP 4", audioUrl: "https://archive.org/download/elgcc-teachings-2020/28.%20UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP/UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP%204.mp3", series: "28. UNDERSTANDING CHRISTIAN DISCIPLESHIP", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/28.%20UNDERSTANDING%20CHRISTIAN%20DISCIPLESHIP/UTTERANCE%201.mp3", series: "28. UNDERSTANDING CHRISTIAN DISCIPLESHIP", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXPLANATION OF PSALMS 3RD OF JAN 2021", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/EXPLANATION%20OF%20PSALMS%203RD%20OF%20JAN%202021.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S INSTRUCTION 6TH JAN", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PASTOR%27S%20INSTRUCTION%206TH%20JAN.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 03012021", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PASTOR%27S%20UTTERANCE%2003012021.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 06122020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PASTOR%27S%20UTTERANCE%2006122020.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE WDIM", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PASTOR%27S%20UTTERANCE%20WDIM.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM (WHAT DOES IT MEAN TO BE BORN AGAIN) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PSALM%20%28WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%29%202.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM (WHAT DOES IT MEAN TO BE BORN AGAIN)", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PSALM%20%28WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%29.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS 3RD OF JANUARY, 2021", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/PSALMS%203RD%20OF%20JANUARY%2C%202021.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Prayer towards WCC", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/Prayer%20towards%20WCC.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Psalm 08112020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/Psalm%2008112020.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Psalms 27112020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/Psalms%2027112020.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE by Pastor", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/UTTERANCE%20by%20Pastor.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/UTTERANCE.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Utterance 12th of december", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/Utterance%2012th%20of%20december.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%201.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2010.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2011.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2012.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2013.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2014.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 15A", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2015A.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 15B", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2015B.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 15C", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2015C.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 15D", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2015D.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2016.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2017.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2018.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2019.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%202.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 20", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2020.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 21", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2021.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 22", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2022.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 23", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%2023.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%203.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%204.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%205.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%206.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%207.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%208.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WHAT DOES IT MEAN TO BE BORN AGAIN (THE EXPLANATION OF THE NEW BIRTH) TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN%20%28THE%20EXPLANATION%20OF%20THE%20NEW%20BIRTH%29%20TRACK%209.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "uncut psalm 08112020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/29.%20WHAT%20DOES%20IT%20MEAN%20TO%20BE%20BORN%20AGAIN/uncut%20psalm%2008112020.mp3", series: "29. WHAT DOES IT MEAN TO BE BORN AGAIN", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SHOULD A BELIEVER IN CHRIST FAST TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/3.%20SHOULD%20A%20BELIEVER%20IN%20CHRIST%20FAST/SHOULD%20A%20BELIEVER%20IN%20CHRIST%20FAST%20TRACK%20%202.mp3", series: "3. SHOULD A BELIEVER IN CHRIST FAST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SHOULD A BELIEVER IN CHRIST FAST TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/3.%20SHOULD%20A%20BELIEVER%20IN%20CHRIST%20FAST/SHOULD%20A%20BELIEVER%20IN%20CHRIST%20FAST%20TRACK%201.mp3", series: "3. SHOULD A BELIEVER IN CHRIST FAST", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WITHOUT MURMURING OR DISPUTATION 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/4.%20WITHOUT%20MURMURINGS%20OR%20DISPUTINGS/WITHOUT%20MURMURING%20OR%20DISPUTATION%201.mp3", series: "4. WITHOUT MURMURINGS OR DISPUTINGS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "WITHOUT MURMURING OR DISPUTATION 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/4.%20WITHOUT%20MURMURINGS%20OR%20DISPUTINGS/WITHOUT%20MURMURING%20OR%20DISPUTATION%202.mp3", series: "4. WITHOUT MURMURINGS OR DISPUTINGS", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HOW TO PREPARE FOR CHRISTIAN MEETINGS", audioUrl: "https://archive.org/download/elgcc-teachings-2020/5.%20HOW%20TO%20PREPARE%20FOR%20CHRISTIAN%20MEETINGS.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%201.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%202.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%203.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%204.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%205.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE PRACTISE OF GIVING TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2020/6.%20THE%20PRACTISE%20OF%20GIVING/THE%20PRACTISE%20OF%20GIVING%20TRACK%206.mp3", series: "6. THE PRACTISE OF GIVING", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE GOSPEL; OUR ATTITUDE & OUR PREDETERMINED RESPONSE TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2020/7%20THE%20GOSPEL%3B%20OUR%20ATTITUDE%20%26%20OUR%20PREDETERMINED%20RESPONSE/THE%20GOSPEL%3B%20OUR%20ATTITUDE%20%26%20OUR%20PREDETERMINED%20RESPONSE%20TRACK%201.mp3", series: "7 THE GOSPEL; OUR ATTITUDE & OUR PREDETERMINED RESPONSE", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE GOSPEL; OUR ATTITUDE & OUR PREDETERMINED RESPONSE TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2020/7%20THE%20GOSPEL%3B%20OUR%20ATTITUDE%20%26%20OUR%20PREDETERMINED%20RESPONSE/THE%20GOSPEL%3B%20OUR%20ATTITUDE%20%26%20OUR%20PREDETERMINED%20RESPONSE%20TRACK%202.mp3", series: "7 THE GOSPEL; OUR ATTITUDE & OUR PREDETERMINED RESPONSE", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "8. ASSURED IN CHRIST, I AM NOT AFRAID", audioUrl: "https://archive.org/download/elgcc-teachings-2020/8.%20ASSURED%20IN%20CHRIST%2C%20I%20AM%20NOT%20AFRAID.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "9. NOTHING IS WRONG WITH YOU; DWELLING IN FORGIVENESS OF SINS", audioUrl: "https://archive.org/download/elgcc-teachings-2020/9.%20NOTHING%20IS%20WRONG%20WITH%20YOU%3B%20DWELLING%20IN%20FORGIVENESS%20OF%20SINS.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 CONTROL OVER APPETITE", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20CONTROL%20OVER%20APPETITE.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 HOW TO SERVE IN YOUR LOCAL CHURCH (THE BASICS)", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20HOW%20TO%20SERVE%20IN%20YOUR%20LOCAL%20CHURCH%20%28THE%20BASICS%29.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 KEEPING SUPERNATURAL RELATIONSHIPS", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20KEEPING%20SUPERNATURAL%20RELATIONSHIPS.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 PATIENCE IN MINISTRY", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20PATIENCE%20IN%20MINISTRY.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 PRAYERS", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20PRAYERS.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2020 THE ZEAL OF GOD", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/CHURCH%20RETREAT%202020%20-%20THE%20ZEAL%20OF%20GOD.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE (RETREAT 2020)", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/PASTOR%27S%20UTTERANCE%20%28RETREAT%202020%29.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM DURING CHURCH RETREAT 2020", audioUrl: "https://archive.org/download/elgcc-teachings-2020/Church%20Retreat%202020/PSALM%20DURING%20CHURCH%20RETREAT%202020.mp3", series: "Church Retreat 2020", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "DEALING WISELY WITH THE GRACE OF GOD", audioUrl: "https://archive.org/download/elgcc-teachings-2020/DEALING%20WISELY%20WITH%20THE%20GRACE%20OF%20GOD.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS AND WORSHIP", audioUrl: "https://archive.org/download/elgcc-teachings-2020/PSALMS%20AND%20WORSHIP.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE GIFT OF THE GRACE OF GOD BY PASTOR SEGUN BABALOLA", audioUrl: "https://archive.org/download/elgcc-teachings-2020/THE%20GIFT%20OF%20THE%20GRACE%20OF%20GOD%20BY%20PASTOR%20SEGUN%20BABALOLA.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING OF THE SPIRIT IN HONOUR BY PASTOR SEGUN BABALOLA", audioUrl: "https://archive.org/download/elgcc-teachings-2020/THE%20LEADING%20OF%20THE%20SPIRIT%20IN%20HONOUR%20BY%20PASTOR%20SEGUN%20BABALOLA.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THREE LESSONS FROM CHRISTMAS (INCARNATION)", audioUrl: "https://archive.org/download/elgcc-teachings-2020/THREE%20LESSONS%20FROM%20CHRISTMAS%20%28INCARNATION%29.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Ministry of the Word", audioUrl: "https://archive.org/download/elgcc-teachings-2020/The%20Ministry%20of%20the%20Word.mp3", series: "General Teachings", year: 2020, speaker: "Stephen Tijesuni Oyagbile" },

  // 2021 Sermons
  { title: "1. MY LIFE AND MY TIME (WALKING IN GOD'S WISDOM)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/1.%20MY%20LIFE%20AND%20MY%20TIME%20%28WALKING%20IN%20GOD%27S%20WISDOM%29.mp3", series: "General Teachings", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS 22092021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/PSALMS%2022092021.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%201.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2010.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2011.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2012.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2013.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2014.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%2015.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%202.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%203.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%204.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%205.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%206.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%207.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%208.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2021/10.%20THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST/THE%20KNOWLEDGE%20OF%20GOD%27S%20STEADFAST%20LOVE%20IN%20CHRIST%20TRACK%209.mp3", series: "10. THE KNOWLEDGE OF GOD'S STEADFAST LOVE IN CHRIST", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%201.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%202.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%203.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%204.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%205.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONCERNING UTTERANCE TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/11.%20CONCERNING%20UTTERANCE/CONCERNING%20UTTERANCE%20TRACK%206.mp3", series: "11. CONCERNING UTTERANCE", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONTENDING IN THIS WORK (IT IS TIME TO WAR) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/12.%20CONTENDING%20IN%20THIS%20WORK%20%28IT%20IS%20TIME%20TO%20WAR%29/CONTENDING%20IN%20THIS%20WORK%20%28IT%20IS%20TIME%20TO%20WAR%29%20TRACK%201.mp3", series: "12. CONTENDING IN THIS WORK (IT IS TIME TO WAR)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONTENDING IN THIS WORK (IT IS TIME TO WAR) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/12.%20CONTENDING%20IN%20THIS%20WORK%20%28IT%20IS%20TIME%20TO%20WAR%29/CONTENDING%20IN%20THIS%20WORK%20%28IT%20IS%20TIME%20TO%20WAR%29%20TRACK%202.mp3", series: "12. CONTENDING IN THIS WORK (IT IS TIME TO WAR)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONTENDING IN & FOR SUPERNATURAL RELATIONSHIPS (WINNING WITH WISDOM) Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/13.%20CONTENDING%20IN%20%26%20FOR%20SUPERNATURAL%20RELATIONSHIPS%20%28WINNING%20WITH%20WISDOM%29/CONTENDING%20IN%20%26%20FOR%20SUPERNATURAL%20RELATIONSHIPS%20%28WINNING%20WITH%20WISDOM%29%20Track%201.mp3", series: "13. CONTENDING IN & FOR SUPERNATURAL RELATIONSHIPS (WINNING WITH WISDOM)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CONTENDING IN & FOR SUPERNATURAL RELATIONSHIPS (WINNING WITH WISDOM) Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/13.%20CONTENDING%20IN%20%26%20FOR%20SUPERNATURAL%20RELATIONSHIPS%20%28WINNING%20WITH%20WISDOM%29/CONTENDING%20IN%20%26%20FOR%20SUPERNATURAL%20RELATIONSHIPS%20%28WINNING%20WITH%20WISDOM%29%20Track%202.mp3", series: "13. CONTENDING IN & FOR SUPERNATURAL RELATIONSHIPS (WINNING WITH WISDOM)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%201.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%202.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%203.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%204.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%205.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%206.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%207.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT) TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2021/14.%20THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29/THE%20MINISTRY%20OF%20LAYING%20ON%20OF%20HANDS%20%28WHAT%20IT%20MEANS%20%26%20HOW%20TO%20RECEIVE%20IT%29%20TRACK%208.mp3", series: "14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "15. HEALING SERVICE DECEMBER 2021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/15.%20HEALING%20SERVICE%20DECEMBER%202021.mp3", series: "General Teachings", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN GIVING (UNDERSTANDING TRUE RICHES) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/16.%20CHRISTIAN%20GIVING%20%28UNDERSTANDING%20TRUE%20RICHES%29/CHRISTIAN%20GIVING%20%28UNDERSTANDING%20TRUE%20RICHES%29%20TRACK%202.mp3", series: "16. CHRISTIAN GIVING (UNDERSTANDING TRUE RICHES)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN GIVING (UNDERSTANDING TRUE RICHES)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/16.%20CHRISTIAN%20GIVING%20%28UNDERSTANDING%20TRUE%20RICHES%29/CHRISTIAN%20GIVING%20%28UNDERSTANDING%20TRUE%20RICHES%29.mp3", series: "16. CHRISTIAN GIVING (UNDERSTANDING TRUE RICHES)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURALLY CONSCIOUS IN DISCIPLESHIP TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2.%20SUPERNATURALLY%20CONSCIOUS%20IN%20DISCIPLESHIP/SUPERNATURALLY%20CONSCIOUS%20IN%20DISCIPLESHIP%20TRACK%201.mp3", series: "2. SUPERNATURALLY CONSCIOUS IN DISCIPLESHIP", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURALLY CONSCIOUS IN DISCIPLESHIP TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2.%20SUPERNATURALLY%20CONSCIOUS%20IN%20DISCIPLESHIP/SUPERNATURALLY%20CONSCIOUS%20IN%20DISCIPLESHIP%20TRACK%202.mp3", series: "2. SUPERNATURALLY CONSCIOUS IN DISCIPLESHIP", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHARGE; DO NOT SLEEP, PRAY", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/CHARGE%3B%20DO%20NOT%20SLEEP%2C%20PRAY.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 02052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2002052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 05052021 (2)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2005052021%20%282%29.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 14052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2014052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 18042021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2018042021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 21052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2021052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "INSTRUCTIONS 23052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/INSTRUCTIONS%2023052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 02072021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/PASTOR%27S%20UTTERANCE%2002072021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 20012021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/PASTOR%27S%20UTTERANCE%2020012021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 24012021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/PASTOR%27S%20UTTERANCE%2024012021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S UTTERANCE 27012021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/PASTOR%27S%20UTTERANCE%2027012021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S WORDS 21042021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/PASTOR%27S%20WORDS%2021042021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE & INSTRUCTION 13062021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%26%20INSTRUCTION%2013062021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE & INSTRUCTION 28052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%26%20INSTRUCTION%2028052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE & INSTRUCTION 30052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%26%20INSTRUCTION%2030052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE & INSTRUCTIONS 20062021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%26%20INSTRUCTIONS%2020062021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE (1) 7TH of MARCH", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%281%29%207TH%20of%20MARCH.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE (2) 7TH of MARCH", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20%282%29%207TH%20of%20MARCH.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 03022021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2003022021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 07022021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2007022021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 09052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2009052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 1 21ST of FEB", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%201%2021ST%20of%20FEB.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 11022021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2011022021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 11062021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2011062021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 12052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2012052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 14032021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2014032021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 1604021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%201604021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 19032021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2019032021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 19052021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2019052021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 2 21ST of FEB", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%202%2021ST%20of%20FEB.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 24032021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2024032021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 25042021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2025042021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 28042021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2028042021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE 29032021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%2029032021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UTTERANCE GIVEN BY PASTOR STEPHEN & PASTOR BABALOLA SEGUN", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/UTTERANCE%20GIVEN%20BY%20PASTOR%20STEPHEN%20%26%20PASTOR%20BABALOLA%20SEGUN.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Utterance 26 Dec, 2021", audioUrl: "https://archive.org/download/elgcc-teachings-2021/2021%202/Utterance%2026%20Dec%2C%202021.mp3", series: "2021 2", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%201.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2010.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2011.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2012.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2013.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2015.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2016.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2017.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2018.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2019.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%202.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 20", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2020.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 21", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2021.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 22", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2022.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 23", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2023.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 24", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2024.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 25", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2025.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 26", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2026.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 27", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2027.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 28", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2028.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 29", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2029.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%203.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 30", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2030.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 31", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2031.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 32", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2032.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 33", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2033.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 34", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2034.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 35", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2035.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 36", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2036.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 37", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2037.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 38", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2038.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 39", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2039.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%204.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 40", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%2040.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%205.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%206.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%207.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%208.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE HARVEST OF GOD TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2021/3.%20THE%20HARVEST%20OF%20GOD/THE%20HARVEST%20OF%20GOD%20TRACK%209.mp3", series: "3. THE HARVEST OF GOD", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "4. WHY WE PRAY FOR OUR PASTOR", audioUrl: "https://archive.org/download/elgcc-teachings-2021/4.%20WHY%20WE%20PRAY%20FOR%20OUR%20PASTOR.mp3", series: "General Teachings", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. FLOWING WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS", audioUrl: "https://archive.org/download/elgcc-teachings-2021/5.%20FLOWING%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS.mp3", series: "General Teachings", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "6. PRAYER AND OUR LOVE WALK (SERIES 2)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/6.%20PRAYER%20AND%20OUR%20LOVE%20WALK%20%28SERIES%202%29.mp3", series: "General Teachings", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%201.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%2010.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%2012.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%2013.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%2014.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%2015.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%202.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%203.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%204.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%205.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%206.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%207.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%208.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3) TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2021/7.%20FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29/FOLLOWING%20THE%20LEADING%20OF%20THE%20SPIRIT%20%28SERIES%203%29%20TRACK%209.mp3", series: "7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "APPRECIATION & HONOUR TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/8.%20APPRECIATION%20%26%20HONOUR/APPRECIATION%20%26%20HONOUR%20TRACK%201.mp3", series: "8. APPRECIATION & HONOUR", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "APPRECIATION & HONOUR TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/8.%20APPRECIATION%20%26%20HONOUR/APPRECIATION%20%26%20HONOUR%20TRACK%202.mp3", series: "8. APPRECIATION & HONOUR", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "APPRECIATION & HONOUR TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/8.%20APPRECIATION%20%26%20HONOUR/APPRECIATION%20%26%20HONOUR%20TRACK%203.mp3", series: "8. APPRECIATION & HONOUR", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "APPRECIATION & HONOUR TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/8.%20APPRECIATION%20%26%20HONOUR/APPRECIATION%20%26%20HONOUR%20TRACK%204.mp3", series: "8. APPRECIATION & HONOUR", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "APPRECIATION & HONOUR TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/8.%20APPRECIATION%20%26%20HONOUR/APPRECIATION%20%26%20HONOUR%20TRACK%205.mp3", series: "8. APPRECIATION & HONOUR", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%201.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%202.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%203.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%204.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%205.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EXCEEDING GREATNESS OF HIS POWER TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2021/9.%20EXCEEDING%20GREATNESS%20OF%20HIS%20POWER/EXCEEDING%20GREATNESS%20OF%20HIS%20POWER%20TRACK%206.mp3", series: "9. EXCEEDING GREATNESS OF HIS POWER", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (LABORING IN PRAYERS)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28LABORING%20IN%20PRAYERS%29.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (MAINTAINING THE BOND OF UNITY)", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28MAINTAINING%20THE%20BOND%20OF%20UNITY%29.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (OUR GIVING) 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28OUR%20GIVING%29%201.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (OUR GIVING) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28OUR%20GIVING%29%202.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (THE CHURCH AND HER MISSION) 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28THE%20CHURCH%20AND%20HER%20MISSION%29%201.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (THE CHURCH AND HER MISSION) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28THE%20CHURCH%20AND%20HER%20MISSION%29%202.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (THE CHURCH AND HER MISSION) 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28THE%20CHURCH%20AND%20HER%20MISSION%29%203.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHURCH RETREAT 2021 (THE CHURCH AND HER MISSION) 4 - Q&A", audioUrl: "https://archive.org/download/elgcc-teachings-2021/CHURCH%20RETREAT%202021/CHURCH%20RETREAT%202021%20%28THE%20CHURCH%20AND%20HER%20MISSION%29%204%20-%20Q%26A.mp3", series: "CHURCH RETREAT 2021", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN CONDUCT AND SERVICE", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20CHRISTIAN%20CONDUCT%20AND%20SERVICE.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN LIVING EP. 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20CHRISTIAN%20LIVING%20EP.%201.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN LIVING EP. 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20CHRISTIAN%20LIVING%20EP.%202.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN LIVING EP. 3", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20CHRISTIAN%20LIVING%20EP.%203.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "CHRISTIAN LIVING EP. 4", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20CHRISTIAN%20LIVING%20EP.%204.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EVANGELISM 1", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20EVANGELISM%201.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "EVANGELISM 2", audioUrl: "https://archive.org/download/elgcc-teachings-2021/JOS%20BRETHREN%20RETREAT/JOS%20BRETHREN%20RETREAT%20-%20EVANGELISM%202.mp3", series: "JOS BRETHREN RETREAT", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS", audioUrl: "https://archive.org/download/elgcc-teachings-2021/UTTERANCE%20%26%20INSTRUCTIONS/PSALMS.mp3", series: "UTTERANCE & INSTRUCTIONS", year: 2021, speaker: "Stephen Tijesuni Oyagbile" },
  // 2022 Sermons
  { title: "1. PRIORITY; A SUPERNATURAL ORDERED 2022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/1.%20PRIORITY%3B%20A%20SUPERNATURAL%20ORDERED%202022/1.%20PRIORITY%3B%20A%20SUPERNATURAL%20ORDERED%202022.mp3", series: "1. PRIORITY; A SUPERNATURAL ORDERED 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS (series 2) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/10.%20HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20series%202/HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20%28series%202%29%20TRACK%201.mp3", series: "10. HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS series 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS (series 2) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/10.%20HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20series%202/HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20%28series%202%29%20TRACK%202.mp3", series: "10. HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS series 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS (series 2) TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/10.%20HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20series%202/HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20%28series%202%29%20TRACK%203.mp3", series: "10. HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS series 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS", audioUrl: "https://archive.org/download/elgcc-teachings-2022/10.%20HOW%20TO%20FLOW%20WITH%20THE%20SPIRIT%20OF%20GOD%20IN%20SPECIAL%20MEETINGS%20series%202/PSALMS.mp3", series: "10. HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS series 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "11. DEALING WITH THE ATTACKS OF THE ENEMY (THE PLACE & IMPORTANCE OF UNITY)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/11.%20DEALING%20WITH%20THE%20ATTACKS%20OF%20THE%20ENEMY%20%28THE%20PLACE%20%26%20IMPORTANCE%20OF%20UNITY%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "DEALING WITH THE ATTACKS OF THE ENEMY (THE PLACE & IMPORTANCE OF UNITY)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/11.%20DEALING%20WITH%20THE%20ATTACKS%20OF%20THE%20ENEMY%20%28THE%20PLACE%20%26%20IMPORTANCE%20OF%20UNITY%29/DEALING%20WITH%20THE%20ATTACKS%20OF%20THE%20ENEMY%20%28THE%20PLACE%20%26%20IMPORTANCE%20OF%20UNITY%29.mp3", series: "11. DEALING WITH THE ATTACKS OF THE ENEMY (THE PLACE & IMPORTANCE OF UNITY)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%201.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2010.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2011.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2012.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2013.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2014.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2015.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2016.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2017.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2018.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2019.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%202.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 20", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%2020.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%203.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%204.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%205.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%206.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%207.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%208.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A SACRED ATTITUDE IN THE LOCAL CHURCH TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2022/13.%20A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH/A%20SACRED%20ATTITUDE%20IN%20THE%20LOCAL%20CHURCH%20TRACK%209.mp3", series: "13. A SACRED ATTITUDE IN THE LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%201.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%202.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%203.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%204.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%205.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%206.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MIRACLES TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2022/14.%20MIRACLES/MIRACLES%20TRACK%207.mp3", series: "14. MIRACLES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/15.%20COMMITMENT/COMMITMENT%20TRACK%201.mp3", series: "15. COMMITMENT", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/15.%20COMMITMENT/COMMITMENT%20TRACK%202.mp3", series: "15. COMMITMENT", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/15.%20COMMITMENT/COMMITMENT%20TRACK%203.mp3", series: "15. COMMITMENT", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "COMMITMENT TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/15.%20COMMITMENT/COMMITMENT%20TRACK%204.mp3", series: "15. COMMITMENT", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BY MY SPIRIT (MAKING FULL PROOF OF YOUR MINISTRY).TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/BY%20MY%20SPIRIT%20%28MAKING%20FULL%20PROOF%20OF%20YOUR%20MINISTRY%29.TRACK%202.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BY MY SPIRIT (MAKING FULL PROOF OF YOUR MINISTRY).TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/BY%20MY%20SPIRIT%20%28MAKING%20FULL%20PROOF%20OF%20YOUR%20MINISTRY%29.TRACK%203.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BY MY SPIRIT (MAKING FULL PROOF OF YOUR MINISTRY).TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/BY%20MY%20SPIRIT%20%28MAKING%20FULL%20PROOF%20OF%20YOUR%20MINISTRY%29.TRACK%204.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BY MY SPIRIT (MAKING FULL PROOF OF YOUR MINISTRY).TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/BY%20MY%20SPIRIT%20%28MAKING%20FULL%20PROOF%20OF%20YOUR%20MINISTRY%29.TRACK%205.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BY MY SPIRIT (MAKING FULL PROOF OF YOUR MINISTRY).TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/BY%20MY%20SPIRIT%20%28MAKING%20FULL%20PROOF%20OF%20YOUR%20MINISTRY%29.TRACK%206.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "POWER THROUGH PRAYERS", audioUrl: "https://archive.org/download/elgcc-teachings-2022/16.%20CHURCH%20RETREAT%202022/POWER%20THROUGH%20PRAYERS.mp3", series: "16. CHURCH RETREAT 2022", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%201.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%202.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%203.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%204.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%205.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HOW TO BE A BLESSING IN THIS LOCAL CHURCH TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/17.%20HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH/HOW%20TO%20BE%20A%20BLESSING%20IN%20THIS%20LOCAL%20CHURCH%20TRACK%206.mp3", series: "17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%201.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2010.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2011.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2012.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2013.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2014.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2015.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2016.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 17", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2017.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 18", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2018.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 19", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%2019.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%202.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%203.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%204.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%205.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%206.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%207.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%208.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "OUR SUPERNATURAL FACULTIES TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2022/18.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202/OUR%20SUPERNATURAL%20FACULTIES%20TRACK%209.mp3", series: "18. OUR SUPERNATURAL FACULTIES SERIES 2", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "19. FLOWING WITH THE HOLY GHOST", audioUrl: "https://archive.org/download/elgcc-teachings-2022/19.%20FLOWING%20WITH%20THE%20HOLY%20GHOST.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%201.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%2010.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%202.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%203.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%204.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 5A", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%205A.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 5B", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%205B.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%206.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%207.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%208.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "BIBLE INTERPRETATION TRACK 9", audioUrl: "https://archive.org/download/elgcc-teachings-2022/2.%20BIBLE%20INTERPRETATION/BIBLE%20INTERPRETATION%20TRACK%209.mp3", series: "2. BIBLE INTERPRETATION", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "NECESSITY OF PRAYERS TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/20.%20NECESSITY%20OF%20PRAYERS/NECESSITY%20OF%20PRAYERS%20TRACK%201.mp3", series: "20. NECESSITY OF PRAYERS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "NECESSITY OF PRAYERS TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/20.%20NECESSITY%20OF%20PRAYERS/NECESSITY%20OF%20PRAYERS%20TRACK%202.mp3", series: "20. NECESSITY OF PRAYERS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "A LIFE OF TOTAL CONSECRATION TO GOD'S LIFE", audioUrl: "https://archive.org/download/elgcc-teachings-2022/3.%20A%20LIFE%20OF%20TOTAL%20CONSECRATION%20TO%20GOD%27S%20PLAN/A%20LIFE%20OF%20TOTAL%20CONSECRATION%20TO%20GOD%27S%20LIFE.mp3", series: "3. A LIFE OF TOTAL CONSECRATION TO GOD'S PLAN", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS 09012022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/3.%20A%20LIFE%20OF%20TOTAL%20CONSECRATION%20TO%20GOD%27S%20PLAN/PSALMS%2009012022.mp3", series: "3. A LIFE OF TOTAL CONSECRATION TO GOD'S PLAN", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE (19012022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICE%20%2819012022%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE APRIL (20042022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20APRIL%20%2820042022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE DECEMBER 14122022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20DECEMBER%2014122022.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE FEBRUARY (16022022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20FEBRUARY%20%2816022022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE JANUARY (19012022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20JANUARY%20%2819012022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE JUNE (15062022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20JUNE%20%2815062022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE MARCH 2022 (Healing A sign of God's Compassion)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20MARCH%202022%20%28Healing%20A%20sign%20of%20God%27s%20Compassion%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE MAY (15062022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20MAY%20%2815062022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE MAY (18052022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20MAY%20%2818052022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE NOVEMBER 23112022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20NOVEMBER%2023112022.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE OCTOBER (19102022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20OCTOBER%20%2819102022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. HEALING SERVICE SEPTEMBER (21092022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20HEALING%20SERVICE%20SEPTEMBER%20%2821092022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. SUNDAY HEALING SERVICE APRIL (24042022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20SUNDAY%20HEALING%20SERVICE%20APRIL%20%2824042022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. SUNDAY HEALING SERVICE AUGUST (17082022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20SUNDAY%20HEALING%20SERVICE%20AUGUST%20%2817082022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "5. SUNDAY HEALING SERVICE JULY (20072022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/5.%20SUNDAY%20HEALING%20SERVICE%20JULY%20%2820072022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "DADDY & MUMMY'S PRAYERS FOR THE CHURCH (16012022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/DADDY%20%26%20MUMMY%27S%20PRAYERS%20FOR%20THE%20CHURCH%20%2816012022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "DADDY & MUMMY'S PRAYERS FOR THE CHURCH (16022022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/DADDY%20%26%20MUMMY%27S%20PRAYERS%20FOR%20THE%20CHURCH%20%2816022022%29.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "HEALING SESSION", audioUrl: "https://archive.org/download/elgcc-teachings-2022/5.%20HEALING%20SERVICES/HEALING%20SESSION.mp3", series: "5. HEALING SERVICES", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "6 things about living a Supernatural Life", audioUrl: "https://archive.org/download/elgcc-teachings-2022/6%20things%20about%20living%20a%20Supernatural%20Life.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "6. SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH). TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/6.%20SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20%28CHRIST%20WORKING%20IN%20AND%20THROUGH%20THE%20CHURCH%29.%20TRACK%201.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "6. SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH). TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/6.%20SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20%28CHRIST%20WORKING%20IN%20AND%20THROUGH%20THE%20CHURCH%29.%20TRACK%202.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/6.%20SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20%28CHRIST%20WORKING%20IN%20AND%20THROUGH%20THE%20CHURCH%29/SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20TRACK%201.mp3", series: "6. SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/6.%20SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20%28CHRIST%20WORKING%20IN%20AND%20THROUGH%20THE%20CHURCH%29/SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20TRACK%202.mp3", series: "6. SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE CROSS; THE COST OF THE CAUSE", audioUrl: "https://archive.org/download/elgcc-teachings-2022/7.%20THE%20CROSS%3B%20THE%20COST%20OF%20THE%20CAUSE/THE%20CROSS%3B%20THE%20COST%20OF%20THE%20CAUSE.mp3", series: "7. THE CROSS; THE COST OF THE CAUSE", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS & NINU ORUKO RE", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/PSALMS%20%26%20NINU%20ORUKO%20RE.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%201.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%202.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%203.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%204.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%205.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%206.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE WONDERFUL NAME OF JESUS TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2022/8.%20THE%20WONDERFUL%20NAME%20OF%20JESUS/THE%20WONDERFUL%20NAME%20OF%20JESUS%20TRACK%207.mp3", series: "8. THE WONDERFUL NAME OF JESUS", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "9. THE RESSURECTION; AN INSTRUCTION", audioUrl: "https://archive.org/download/elgcc-teachings-2022/9.%20THE%20RESSURECTION%3B%20AN%20INSTRUCTION.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },


  { title: "A SACRED ATTITUDE IN THE CHURCH", audioUrl: "https://archive.org/download/elgcc-teachings-2022/A%20SACRED%20ATTITUDE%20IN%20THE%20CHURCH.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE BASICS OF DISCIPLESHIP", audioUrl: "https://archive.org/download/elgcc-teachings-2022/LEADERS%2C%20AND%20WORKERS%27%20MEETING/THE%20BASICS%20OF%20DISCIPLESHIP.mp3", series: "LEADERS, AND WORKERS' MEETING", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "MINISTRATION 1 DAY 2(IGNITING SAINST PASSION)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/MINISTRATION%201%20DAY%202%28IGNITING%20SAINST%20PASSION%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PASTOR'S CORRECTION & EXHORTATION (01062022).", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PASTOR%27S%20CORRECTION%20%26%20EXHORTATION%20%2801062022%29..mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM GIVEN BY PASTOR ON 30012022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALM%20GIVEN%20BY%20PASTOR%20ON%2030012022.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM GIVEN ON 16012022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALM%20GIVEN%20ON%2016012022.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS (THE NATIONS ARE OPEN NOW AND OTHERS)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALMS%20%28THE%20NATIONS%20ARE%20OPEN%20NOW%20AND%20OTHERS%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS ONA TI LA", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALMS%20-%20ONA%20TI%20LA.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM GIVEN BY PASTOR ON 30012022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALMS%20GIVEN/PSALM%20GIVEN%20BY%20PASTOR%20ON%2030012022.mp3", series: "PSALMS GIVEN", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALM GIVEN ON 16012022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/PSALMS%20GIVEN/PSALM%20GIVEN%20ON%2016012022.mp3", series: "PSALMS GIVEN", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "QUESTION AND ANSWER (SAT 23072022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/QUESTION%20AND%20ANSWER%20%28SAT%2023072022%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "QUESTION AND ANSWER SERVICE (SATURDAY 23072022)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/QUESTION%20AND%20ANSWER%20SERVICE%20%28SATURDAY%2023072022%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SATURDAY TEACHING 18062022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/SATURDAY%20TEACHING%2018062022.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUNDAY SERVICE 28082022", audioUrl: "https://archive.org/download/elgcc-teachings-2022/SUNDAY%20SERVICE%2028082022.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH). TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2022/SUPERNATURAL%20BOLDNESS%3B%20WORKING%20IN%20THE%20CONFIDENCE%20OF%20THE%20SPIRIT%20%28CHRIST%20WORKING%20IN%20AND%20THROUGH%20THE%20CHURCH%29.%20TRACK%201.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE BASICS OF DISCIPLESHIP", audioUrl: "https://archive.org/download/elgcc-teachings-2022/THE%20BASICS%20OF%20DISCIPLESHIP%20%28LEADERS%2C%20AND%20WORKERS%27%20MEETING%202022%29/THE%20BASICS%20OF%20DISCIPLESHIP.mp3", series: "THE BASICS OF DISCIPLESHIP (LEADERS, AND WORKERS' MEETING 2022)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MISSION IS POSSIBLE 1. (OFFA MEETING)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/THE%20MISSION%20IS%20POSSIBLE%20%28OFFA%29/THE%20MISSION%20IS%20POSSIBLE%201.%20%28OFFA%20MEETING%29.mp3", series: "THE MISSION IS POSSIBLE (OFFA)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MISSION IS POSSIBLE 2. (OFFA MEETING)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/THE%20MISSION%20IS%20POSSIBLE%20%28OFFA%29/THE%20MISSION%20IS%20POSSIBLE%202.%20%28OFFA%20MEETING%29.mp3", series: "THE MISSION IS POSSIBLE (OFFA)", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MISSION IS POSSIBLE 1. (OFFA MEETING)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/THE%20MISSION%20IS%20POSSIBLE/THE%20MISSION%20IS%20POSSIBLE%201.%20%28OFFA%20MEETING%29.mp3", series: "THE MISSION IS POSSIBLE", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE MISSION IS POSSIBLE 2. (OFFA MEETING)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/THE%20MISSION%20IS%20POSSIBLE/THE%20MISSION%20IS%20POSSIBLE%202.%20%28OFFA%20MEETING%29.mp3", series: "THE MISSION IS POSSIBLE", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "UNITY IN THE HARVEST (PASTOR WUNMI)", audioUrl: "https://archive.org/download/elgcc-teachings-2022/UNITY%20IN%20THE%20HARVEST%20%28PASTOR%20WUNMI%29.mp3", series: "General Teachings", year: 2022, speaker: "Stephen Tijesuni Oyagbile" },


  // 2023 Sermons
  { title: "REDEEMING THE TIMES (NEW YEAR EXHORTATION) TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2023/1.%20REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29/REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29%20TRACK%201.mp3", series: "1. REDEEMING THE TIMES (NEW YEAR EXHORTATION)", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "REDEEMING THE TIMES (NEW YEAR EXHORTATION) TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2023/1.%20REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29/REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29%20TRACK%202.mp3", series: "1. REDEEMING THE TIMES (NEW YEAR EXHORTATION)", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "REDEEMING THE TIMES (NEW YEAR EXHORTATION) TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2023/1.%20REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29/REDEEMING%20THE%20TIMES%20%28NEW%20YEAR%20EXHORTATION%29%20TRACK%203.mp3", series: "1. REDEEMING THE TIMES (NEW YEAR EXHORTATION)", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "10. How do I Handle Difficult Disciples", audioUrl: "https://archive.org/download/elgcc-teachings-2023/10.%20How%20to%20Handle%20Difficult%20Disciples/10.%20How%20do%20I%20Handle%20Difficult%20Disciples.mp3", series: "10. How to Handle Difficult Disciples", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Questions and Answers (How to Handle Difficult Disciples) 1", audioUrl: "https://archive.org/download/elgcc-teachings-2023/10.%20How%20to%20Handle%20Difficult%20Disciples/Questions%20and%20Answers%20%28How%20to%20Handle%20Difficult%20Disciples%29%201.mp3", series: "10. How to Handle Difficult Disciples", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "Questions and Answers (How to Handle Difficult Disciples) 2", audioUrl: "https://archive.org/download/elgcc-teachings-2023/10.%20How%20to%20Handle%20Difficult%20Disciples/Questions%20and%20Answers%20%28How%20to%20Handle%20Difficult%20Disciples%29%202.mp3", series: "10. How to Handle Difficult Disciples", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 1)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%201%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 2)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%202%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 3)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%203%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 4)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%204%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 5)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%205%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 6)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%206%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 7)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%207%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "The Leading of God's Spirit Series 5 (Track 8)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/11.%20The%20Leading%20of%20God%27s%20Spirit%20Series%205/The%20Leading%20of%20God%27s%20Spirit%20Series%205%20%28Track%208%29.mp3", series: "11. The Leading of God's Spirit Series 5", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What are you doing with the Seed in your Hands   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2023/12.%20What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands/What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands%20-%20Track%201.mp3", series: "12. What are you doing with the Seed in your Hands", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What are you doing with the Seed in your Hands   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2023/12.%20What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands/What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands%20-%20Track%202.mp3", series: "12. What are you doing with the Seed in your Hands", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "What are you doing with the Seed in your Hands   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2023/12.%20What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands/What%20are%20you%20doing%20with%20the%20Seed%20in%20your%20Hands%20-%20Track%203.mp3", series: "12. What are you doing with the Seed in your Hands", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "13. Awakening the Dawn (Morning Devotion)", audioUrl: "https://archive.org/download/elgcc-teachings-2023/13.%20Awakening%20the%20Dawn%20%28Morning%20Devotion%29.mp3", series: "General Teachings", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "14. How to Handfle the Spirit of Offence   Track 5", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/14.%20How%20to%20Handfle%20the%20Spirit%20of%20Offence%20-%20Track%205.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "14. How to Handle the Spirit of Offence   Track 1", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence%20-%20Track%201.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "14. How to Handle the Spirit of Offence   Track 2", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence%20-%20Track%202.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "14. How to Handle the Spirit of Offence   Track 3", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence%20-%20Track%203.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "14. How to Handle the Spirit of Offence   Track 4", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence%20-%20Track%204.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "PSALMS   Husbandman", audioUrl: "https://archive.org/download/elgcc-teachings-2023/14.%20How%20to%20Handle%20the%20Spirit%20of%20Offence/PSALMS%20-%20Husbandman.mp3", series: "14. How to Handle the Spirit of Offence", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "15. The Essence of Revelational Knowledge", audioUrl: "https://archive.org/download/elgcc-teachings-2023/15.%20The%20Essence%20of%20Revelational%20Knowledge.mp3", series: "General Teachings", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 1", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%201.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 10", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2010.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 11", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2011.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 12", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2012.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 13", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2013.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 14", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2014.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 15", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2015.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 16", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%2016.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 2", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%202.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 3", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%203.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 4", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%204.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 5", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%205.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 6", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%206.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 7", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%207.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },
  { title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 8", audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%208.mp3", series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT", year: 2023, speaker: "Stephen Tijesuni Oyagbile" },


  {
    title: "THE LEADING AND DEALINGS OF THE SPIRIT TRACK 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/2.%20THE%20LEADINGS%20AND%20DEALINGS%20OF%20THE%20SPIRIT/THE%20LEADING%20AND%20DEALINGS%20OF%20THE%20SPIRIT%20TRACK%209.mp3",
    series: "2. THE LEADINGS AND DEALINGS OF THE SPIRIT",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2010.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2011.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2012.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 13",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2013.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 14",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2014.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 15",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2015.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 16",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2016.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 17",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2017.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 18",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%2018.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%207.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%208.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "DOMINION IN CHRIST TRACK 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/3.%20DOMINION%20IN%20CHRIST/DOMINION%20IN%20CHRIST%20TRACK%209.mp3",
    series: "3. DOMINION IN CHRIST",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "4. THINGS TO BRING TO REMEMBRANCE ABOUT DISCIPLESHIP",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/4.%20THINGS%20TO%20BRING%20TO%20REMEMBRANCE%20ABOUT%20DISCIPLESHIP.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Admonition on Tongues",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/Admonition%20on%20Tongues.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%201.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2010.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2011.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2012.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 13",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2013.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 14",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2014.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 15",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2015.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 16",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2016.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 17",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2017.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 18",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%2018.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%202.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%203.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%204.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%205.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%206.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%207.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%208.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OUR SUPERNATURAL FACULTIES SERIES 2B   TRACK 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B%20-%20TRACK%209.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "PSALMS   INA TO N JO YI , AGBARA OLUWA",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/5.%20OUR%20SUPERNATURAL%20FACULTIES%20SERIES%202B/PSALMS%20-%20INA%20TO%20N%20JO%20YI%20%2C%20AGBARA%20OLUWA.mp3",
    series: "5. OUR SUPERNATURAL FACULTIES SERIES 2B",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building By Wisdom  The Basics   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/6.%20Building%20By%20Wisdom-%20The%20Basics/Building%20By%20Wisdom-%20The%20Basics%20-%20Track%201.mp3",
    series: "6. Building By Wisdom- The Basics",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building By Wisdom  The Basics   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/6.%20Building%20By%20Wisdom-%20The%20Basics/Building%20By%20Wisdom-%20The%20Basics%20-%20Track%202.mp3",
    series: "6. Building By Wisdom- The Basics",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building By Wisdom  The Basics   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/6.%20Building%20By%20Wisdom-%20The%20Basics/Building%20By%20Wisdom-%20The%20Basics%20-%20Track%203.mp3",
    series: "6. Building By Wisdom- The Basics",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building By Wisdom  The Basics   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/6.%20Building%20By%20Wisdom-%20The%20Basics/Building%20By%20Wisdom-%20The%20Basics%20-%20Track%204.mp3",
    series: "6. Building By Wisdom- The Basics",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Psalms 1312023",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/6.%20Building%20By%20Wisdom-%20The%20Basics/Psalms%201312023.mp3",
    series: "6. Building By Wisdom- The Basics",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "7. Why you should Pray for your Pastor.",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/7.%20Why%20you%20should%20Pray%20for%20your%20Pastor..mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },


  {
    title: "The Preparations of the Kingdom (The Place of Surrender)   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/8.%20The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29/The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29%20-%20Track%201.mp3",
    series: "8. The Preparations of the Kingdom (The Place of Surrender)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Preparations of the Kingdom (The Place of Surrender)   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/8.%20The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29/The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29%20-%20Track%202.mp3",
    series: "8. The Preparations of the Kingdom (The Place of Surrender)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Preparations of the Kingdom (The Place of Surrender)   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/8.%20The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29/The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29%20-%20Track%203.mp3",
    series: "8. The Preparations of the Kingdom (The Place of Surrender)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Preparations of the Kingdom (The Place of Surrender)   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/8.%20The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29/The%20Preparations%20of%20the%20Kingdom%20%28The%20Place%20of%20Surrender%29%20-%20Track%204.mp3",
    series: "8. The Preparations of the Kingdom (The Place of Surrender)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%201.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%2010.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%2011.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%2012.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%202.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%203.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%204.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%205.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%207.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%208.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry   Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20-%20Track%209.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fulfilling your Ministry Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/9.%20Fulfilling%20your%20Ministry/Fulfilling%20your%20Ministry%20Track%206.mp3",
    series: "9. Fulfilling your Ministry",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "APATA GOSPEL INVASION 2023 (DAY 1)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/APATA%20GOSPEL%20INVASION/APATA%20GOSPEL%20INVASION%202023%20%28DAY%201%29.mp3",
    series: "APATA GOSPEL INVASION",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "APATA GOSPEL INVASION 2023 (DAY 2)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/APATA%20GOSPEL%20INVASION/APATA%20GOSPEL%20INVASION%202023%20%28DAY%202%29.mp3",
    series: "APATA GOSPEL INVASION",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "APATA GOSPEL INVASION 2023 (DAY 3)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/APATA%20GOSPEL%20INVASION/APATA%20GOSPEL%20INVASION%202023%20%28DAY%203%29.mp3",
    series: "APATA GOSPEL INVASION",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Children God's weapon of war",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Children%20God%27s%20weapon%20of%20war.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Order and Accountability in Supernatural Relationships   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Order%20and%20Accountability%20in%20Supernatural%20Relationships%20-%20Track%201.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Order and Accountability in Supernatural Relationships   Track 2 (old)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Order%20and%20Accountability%20in%20Supernatural%20Relationships%20-%20Track%202%20%28old%29.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Order and Accountability in Supernatural Relationships   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Order%20and%20Accountability%20in%20Supernatural%20Relationships%20-%20Track%202.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Praying out the Multitudes   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Praying%20out%20the%20Multitudes%20-%20Track%201.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Praying out the Multitudes   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Praying%20out%20the%20Multitudes%20-%20Track%202.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Psalms   Ina to n jo yi, Iba re Jesu",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/Psalms%20-%20Ina%20to%20n%20jo%20yi%2C%20Iba%20re%20Jesu.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Power of Caution",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/The%20Power%20of%20Caution.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Power of Focus",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Church%20Retreat%202023/The%20Power%20of%20Focus.mp3",
    series: "Church Retreat 2023",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Dealing with the spirit of offences answers to questions",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Dealing%20with%20the%20spirit%20of%20offences%20answers%20to%20questions.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Endure Unto Fruitfulness (Workers' Meeting 17062023)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Endure%20Unto%20Fruitfulness%20%28Workers%27%20Meeting%2017062023%29.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Diverse Miracles (Healing Meeting October 2023)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/Diverse%20Miracles%20%28Healing%20Meeting%20October%202023%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Faith Experiences (Healing Meeting November 2023)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/Faith%20Experiences%20%28Healing%20Meeting%20November%202023%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "HEALING MEETING APRIL 2023",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/HEALING%20MEETING%20APRIL%202023.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "HEALING MEETING AUGUST 2023 (HUMILITY AND HEALING)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/HEALING%20MEETING%20AUGUST%202023%20%28HUMILITY%20AND%20HEALING%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "HEALING MEETING MARCH 2023 (",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/HEALING%20MEETING%20MARCH%202023%20%28.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "HEALING MEETING MAY 2023 (MINISTRATIONS)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/HEALING%20MEETING%20MAY%202023%20%28MINISTRATIONS%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "HEALING MEETING SEPTEMBER 2023 (SPIRIT OF FAITH)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/HEALING%20MEETING%20SEPTEMBER%202023%20%28SPIRIT%20OF%20FAITH%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "WONDERFUL. (HEALING MEETING JULY 2023)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/WONDERFUL.%20%28HEALING%20MEETING%20JULY%202023%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "What Manner of Man is this(HEALING MEETING MAY 2023)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/HEALING%20MEETINGS/What%20Manner%20of%20Man%20is%20this%28HEALING%20MEETING%20MAY%202023%29.mp3",
    series: "HEALING MEETINGS",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "In Nothing Terrified   Track 1  Pastor Wunmi",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/In%20Nothing%20Terrified%20-%20Track%201-%20Pastor%20Wunmi.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "PSALMS   We are taking Bold Steps",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/PSALMS%20-%20We%20are%20taking%20Bold%20Steps.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "SUPERNATURAL BLESSINGS (IKIRUN 2023) Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/SUPERNATURAL%20BLESSINGS%20%28IKIRUN%202023%29/SUPERNATURAL%20BLESSINGS%20%28IKIRUN%202023%29%20Track%201.mp3",
    series: "SUPERNATURAL BLESSINGS (IKIRUN 2023)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "SUPERNATURAL BLESSINGS (IKIRUN 2023) Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/SUPERNATURAL%20BLESSINGS%20%28IKIRUN%202023%29/SUPERNATURAL%20BLESSINGS%20%28IKIRUN%202023%29%20Track%202.mp3",
    series: "SUPERNATURAL BLESSINGS (IKIRUN 2023)",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why Am I Serving   Worker's Meeting 03062023",
    audioUrl: "https://archive.org/download/elgcc-teachings-2023/Why%20Am%20I%20Serving%20-%20Worker%27s%20Meeting%2003062023.mp3",
    series: "General Teachings",
    year: 2023,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  // 2024 Sermons
  {
    title: "Understanding the Purpose of Man in Time   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%201.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%202.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%203.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%204.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%205.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time   Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20-%20Track%207.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Purpose of Man in Time Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/1.%20Understanding%20the%20Purpose%20of%20Man%20in%20Time/Understanding%20the%20Purpose%20of%20Man%20in%20Time%20Track%206.mp3",
    series: "1. Understanding the Purpose of Man in Time",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "4. Pillar of Wisdom; Wisdom of Accountability.",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/4.%20Pillar%20of%20Wisdom%3B%20Wisdom%20of%20Accountability/4.%20Pillar%20of%20Wisdom%3B%20Wisdom%20of%20Accountability..mp3",
    series: "4. Pillar of Wisdom; Wisdom of Accountability",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "4. Pillar of Wisdom; Wisdom of Accountability",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/4.%20Pillar%20of%20Wisdom%3B%20Wisdom%20of%20Accountability/4.%20Pillar%20of%20Wisdom%3B%20Wisdom%20of%20Accountability.mp3",
    series: "4. Pillar of Wisdom; Wisdom of Accountability",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "What to do after a 'Great' Encounter with God",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/6.%20What%20to%20do%20after%20a%20%27Great%27%20Encounter%20with%20God/What%20to%20do%20after%20a%20%27Great%27%20Encounter%20with%20God.mp3",
    series: "6. What to do after a 'Great' Encounter with God",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "7 Pillars of Healthy Living",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7%20Pillars%20of%20Healthy%20Living/7%20Pillars%20of%20Healthy%20Living.mp3",
    series: "7 Pillars of Healthy Living",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20-%20Track%202.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20-%20Track%203.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20-%20Track%204.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words   Track 5 ( Rejoicing)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20-%20Track%205%20%28%20Rejoicing%29.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Excerpts",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Excerpts.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%201.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%2010.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%2011.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%2012.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 13",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%2013.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%206.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%207.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%208.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Winning with Words Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/7.%20Winning%20with%20Words/Winning%20with%20Words%20Track%209.mp3",
    series: "7. Winning with Words",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%201.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%202.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%203.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%204.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%205.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Amazing Grace 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Amazing%20Grace%206.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Humility and the Grace of God",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Amazing%20Grace%20TRECA%20Conference%202024/Humility%20and%20the%20Grace%20of%20God.mp3",
    series: "Amazing Grace TRECA Conference 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Be Anxious for Nothing (Finding God's Peace in the Midst of Storms)   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Be%20Anxious%20for%20Nothing%20%28Finding%20God%27s%20Peace%20in%20the%20Midst%20of%20Storms%29/Be%20Anxious%20for%20Nothing%20%28Finding%20God%27s%20Peace%20in%20the%20Midst%20of%20Storms%29%20-%20Track%201.mp3",
    series: "Be Anxious for Nothing (Finding God's Peace in the Midst of Storms)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Be Anxious for Nothing (Finding God's Peace in the Midst of Storms)   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Be%20Anxious%20for%20Nothing%20%28Finding%20God%27s%20Peace%20in%20the%20Midst%20of%20Storms%29/Be%20Anxious%20for%20Nothing%20%28Finding%20God%27s%20Peace%20in%20the%20Midst%20of%20Storms%29%20-%20Track%202.mp3",
    series: "Be Anxious for Nothing (Finding God's Peace in the Midst of Storms)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building one Another; Being my Brother's Keeper",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Building%20one%20Another%3B%20Being%20my%20Brother%27s%20Keeper/Building%20one%20Another%3B%20Being%20my%20Brother%27s%20Keeper.mp3",
    series: "Building one Another; Being my Brother's Keeper",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Casting Your Cares",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Casting%20Your%20Cares.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Christian Generosity Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Christian%20Generosity/Christian%20Generosity%20Track%201.mp3",
    series: "Christian Generosity",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Christian Generosity Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Christian%20Generosity/Christian%20Generosity%20Track%202.mp3",
    series: "Christian Generosity",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fundamentals of Spiritual Growth Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Fundamentals%20of%20Spiritual%20Growth%20Track%201.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fundamentals of Spiritual Growth Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Fundamentals%20of%20Spiritual%20Growth%20Track%202.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fundamentals of Spiritual Growth Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Fundamentals%20of%20Spiritual%20Growth%20Track%203.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Fundamentals of Spiritual Growth Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Fundamentals%20of%20Spiritual%20Growth%20Track%204.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Psalms   The Spirit of God is moving Psalms by Pastor",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Psalms%20-%20The%20Spirit%20of%20God%20is%20moving%20Psalms%20by%20Pastor.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Psalms   There is hope for me by  Pastor",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Psalms%20-%20There%20is%20hope%20for%20me%20by%20%20Pastor.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Running Against Time Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Running%20Against%20Time%20Track%201.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Running Against Time Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Running%20Against%20Time%20Track%202.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Running Against Time Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Running%20Against%20Time%20Track%203.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Running Against Time Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/Running%20Against%20Time%20Track%204.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Weapon of Prayer Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/The%20Weapon%20of%20Prayer%20Track%201.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Weapon of Prayer Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Church%20Retreat%202024/The%20Weapon%20of%20Prayer%20Track%202.mp3",
    series: "Church Retreat 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Continuity In The Training of The Spirit Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Continuity%20In%20The%20Training%20of%20The%20Spirit/Continuity%20In%20The%20Training%20of%20The%20Spirit%20Track%201.mp3",
    series: "Continuity In The Training of The Spirit",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Continuity In The Training of The Spirit Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Continuity%20In%20The%20Training%20of%20The%20Spirit/Continuity%20In%20The%20Training%20of%20The%20Spirit%20Track%202.mp3",
    series: "Continuity In The Training of The Spirit",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Father s Instructions",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Father_s%20Instructions.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Following and Supporting the Vision of this House",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Following%20and%20Supporting%20the%20Vision%20of%20this%20House.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "(God of All Flesh)JANUARY 2024 HEALING MEETING",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/%28God%20of%20All%20Flesh%29JANUARY%202024%20HEALING%20MEETING.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Accessing the Miraculous; Judging God Faithful",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/Accessing%20the%20Miraculous%3B%20Judging%20God%20Faithful.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "April 2024 Healing Meeting   These Signs 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/April%202024%20Healing%20Meeting%20-%20These%20Signs%203.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "August 2024 Healing Meeting(That the excellency of the Power may be of God)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/August%202024%20Healing%20Meeting%28That%20the%20excellency%20of%20the%20Power%20may%20be%20of%20God%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Healing Our Family s Right(June 2024 Healing Meeting)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/Healing%20Our%20Family_s%20Right%28June%202024%20Healing%20Meeting%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "JULY 2024 HEALING MEEETING Healing Power (In the name of Jesus)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/JULY%202024%20HEALING%20MEEETING%20Healing%20Power%20%28In%20the%20name%20of%20Jesus%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "May 2024 Healing Meeting   Accessing the Miraculous  Judging God Faithful",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/May%202024%20Healing%20Meeting%20-%20Accessing%20the%20Miraculous_%20Judging%20God%20Faithful.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "November 2024 Healing Meeting (Walking on Raging Seas Track 2)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/November%202024%20Healing%20Meeting%20%28Walking%20on%20Raging%20Seas%20Track%202%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "October 2024 Healing Meeting(Walking on Raging Seas)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/October%202024%20Healing%20Meeting%28Walking%20on%20Raging%20Seas%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C Track 42 (December 2024 Healing Meeting)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/Our%20Supernatural%20Faculties%20Series%202C%20Track%2042%20%28December%202024%20Healing%20Meeting%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "September 2024 Healing Meeting(That the excellency of the Power may be of God Track 2)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/HEALING%20MEETINGS%202024/September%202024%20Healing%20Meeting%28That%20the%20excellency%20of%20the%20Power%20may%20be%20of%20God%20Track%202%29.mp3",
    series: "HEALING MEETINGS 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "How to make your church Grow 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/How%20to%20make%20your%20church%20Grow/How%20to%20make%20your%20church%20Grow%201.mp3",
    series: "How to make your church Grow",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "How to make your church Grow 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/How%20to%20make%20your%20church%20Grow/How%20to%20make%20your%20church%20Grow%202.mp3",
    series: "How to make your church Grow",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "How to make your church Grow 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/How%20to%20make%20your%20church%20Grow/How%20to%20make%20your%20church%20Grow%203.mp3",
    series: "How to make your church Grow",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Friday Afternoon",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Friday%20Afternoon.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Friday Evening",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Friday%20Evening.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Friday Morning",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Friday%20Morning.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Saturday Afternoon",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Saturday%20Afternoon.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Saturday Evening",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Saturday%20Evening.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Saturday Morning",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Saturday%20Morning.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Sunday Morning",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Sunday%20Morning.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Thursday Evening",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/LICC%202024/Thursday%20Evening.mp3",
    series: "LICC 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Lessons from Timothy",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Lessons%20from%20Timothy.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "No Weapon formed against you shall prosper   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/No%20Weapon%20formed%20against%20you%20shall%20Prosper/No%20Weapon%20formed%20against%20you%20shall%20prosper%20-%20Track%202.mp3",
    series: "No Weapon formed against you shall Prosper",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "No Weapon formed against you shall prosper   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/No%20Weapon%20formed%20against%20you%20shall%20Prosper/No%20Weapon%20formed%20against%20you%20shall%20prosper%20-%20Track%203.mp3",
    series: "No Weapon formed against you shall Prosper",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OAU Crusade Day 1 (Evening Session)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/OAU%20CRUSADE%202024/OAU%20Crusade%20Day%201%20%28Evening%20Session%29.mp3",
    series: "OAU CRUSADE 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OAU Crusade Day 2 (Evening Session)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/OAU%20CRUSADE%202024/OAU%20Crusade%20Day%202%20%28Evening%20Session%29.mp3",
    series: "OAU CRUSADE 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OAU Crusade Day 2 (Morning Session)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/OAU%20CRUSADE%202024/OAU%20Crusade%20Day%202%20%28Morning%20Session%29.mp3",
    series: "OAU CRUSADE 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%207.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%201.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%2010.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%2011.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%2012.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 13",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%2013.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%202.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%203.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%205.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%206.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%208.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3  Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203%20-Track%204.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3 Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Salvation%20In%20Christ%20Series%203%20%282024%29/Our%20Salvation%20in%20Christ%20Series%203-Track%209.mp3",
    series: "Our Salvation In Christ Series 3 (2024)",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%201.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2010.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2011.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 12",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2012.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 13",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2013.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 14",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2014.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 15",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2015.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 16",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2016.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 17",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2017.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 18",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2018.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 19",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2019.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%202.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 20a",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%2020a.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%204.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%205.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%206.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%208.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C   Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20-%20Track%209.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C Track 20b",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20Track%2020b.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C Track 21",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20Track%2021.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Supernatural Faculties Series 2C Track 22",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Our%20Supernatural%20Faculties%20Series%202C/Our%20Supernatural%20Faculties%20Series%202C%20Track%2022.mp3",
    series: "Our Supernatural Faculties Series 2C",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Pastor s Admonition on giving 190520224",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Pastor_s%20Admonition%20on%20giving%20190520224.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel 2024   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Preaching%20the%20Gospel%202024/Preaching%20the%20Gospel%202024%20-%20Track%201.mp3",
    series: "Preaching the Gospel 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel 2024   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Preaching%20the%20Gospel%202024/Preaching%20the%20Gospel%202024%20-%20Track%202.mp3",
    series: "Preaching the Gospel 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Secondary School 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Secondary%20School%202024/Secondary%20School%201.mp3",
    series: "Secondary School 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Secondary School 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Secondary%20School%202024/Secondary%20School%202.mp3",
    series: "Secondary School 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Life of Thanksgiving",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/The%20Life%20of%20Thanksgiving.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Five things to Quickly note",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/Five%20things%20to%20Quickly%20note.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Baptism with the Holy Ghost ( The Spirit Within & Spirit Upon)   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Baptism%20with%20the%20Holy%20Ghost%20%28%20The%20Spirit%20Within%20%26%20Spirit%20Upon%29%20-%20Track%201.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Baptism with the Holy Ghost ( The Spirit Within & Spirit Upon)   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Baptism%20with%20the%20Holy%20Ghost%20%28%20The%20Spirit%20Within%20%26%20Spirit%20Upon%29%20-%20Track%202.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Baptism with the Holy Ghost ( The Spirit Within & Spirit Upon)   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Baptism%20with%20the%20Holy%20Ghost%20%28%20The%20Spirit%20Within%20%26%20Spirit%20Upon%29%20-%20Track%203.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Baptism with the Holy Ghost ( The Spirit Within & Spirit Upon)   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Baptism%20with%20the%20Holy%20Ghost%20%28%20The%20Spirit%20Within%20%26%20Spirit%20Upon%29%20-%20Track%204.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Baptism with the Holy Ghost ( The Spirit Within & Spirit Upon)   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Baptism%20with%20the%20Holy%20Ghost%20%28%20The%20Spirit%20Within%20%26%20Spirit%20Upon%29%20-%20Track%205.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Father s Dealings   Pastor Segun Babalola",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Father_s%20Dealings%20-%20Pastor%20Segun%20Babalola.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Training of Prayer   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Training%20of%20Prayer%20-%20Track%201.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Training of Prayer   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Training%20Of%20The%20Spirit%202024/Audios/The%20Training%20of%20Prayer%20-%20Track%202.mp3",
    series: "Training Of The Spirit 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Wednesday 25th sept 2024",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/Wednesday%2025th%20sept%202024.mp3",
    series: "General Teachings",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Grace of our Lord Jesus Christ Track 2 (Jos Crusade day 2 Evening Session)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/jos%202024/The%20Grace%20of%20our%20Lord%20Jesus%20Christ%20Track%202%20%28Jos%20Crusade%20day%202%20Evening%20Session%29.mp3",
    series: "jos 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Grace of our Lord Jesus Christ(Jos Crusade day 1 Evening Session)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2024/jos%202024/The%20Grace%20of%20our%20Lord%20Jesus%20Christ%28Jos%20Crusade%20day%201%20Evening%20Session%29.mp3",
    series: "jos 2024",
    year: 2024,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  // 2025 Sermons
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%201.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%202.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%204.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 5(FRIDAY IMPARTATION)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%205%28FRIDAY%20IMPARTATION%29.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%206.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%207.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 8 (February 2025 Healing Meeting)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%208%20%28February%202025%20Healing%20Meeting%29.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%209.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE 2025  SESSION 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/LICC%202025%20TEACHINGS/LIFE%20IN%20CHRIST%20CONFERENCE%202025%20%20SESSION%203.mp3",
    series: "LICC 2025 TEACHINGS",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "OAU CRUSADE 2025 SATURDAY MORNING SESSION",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/OAU%20CRUSADE%202025/OAU%20CRUSADE%202025%20SATURDAY%20MORNING%20SESSION.mp3",
    series: "OAU CRUSADE 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ  Series 3 Track 19B",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20%20Series%203-Track%2019B.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ  Series 3 Track 23",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20%20Series%203-Track%2023.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ  Series 3 Track 24",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20%20Series%203-Track%2024.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ  Series 3 Track 26",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20%20Series%203-Track%2026.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 20B",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2020B.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 21",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2021.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 22",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2022.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 25",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2025.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 27",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2027.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 28",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2028.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 29",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2029.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3   Track 30",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20-%20Track%2030.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 14",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20Track%2014.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 15",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20Track%2015.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 16",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20Track%2016.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 17",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20Track%2017.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 18",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203%20Track%2018.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation In Christ Series 3 Track 19A",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20In%20Christ%20Series%203-Track%2019A.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Our Salvation in Christ Series 3   Track 20A",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Our%20Salvation%20%20In%20Christ%20Series%203%20%282025%29/Our%20Salvation%20in%20Christ%20Series%203%20-%20Track%2020A.mp3",
    series: "Our Salvation  In Christ Series 3 (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20The%20Gospel%20-%20Track%201.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel   Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20The%20Gospel%20-%20Track%207.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 3 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20The%20Gospel-Track%203%20Church%20Retreat%202025.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 4 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20The%20Gospel-Track%204%20Church%20Retreat%202025.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 5 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20The%20Gospel-Track%205%20Church%20Retreat%202025.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20the%20Gospel%20Track%2010.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20the%20Gospel%20Track%202.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20the%20Gospel%20Track%206.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20the%20Gospel%20Track%208.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching the Gospel Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Preaching%20the%20Gospel%20%282025%29/Preaching%20the%20Gospel%20Track%209.mp3",
    series: "Preaching the Gospel (2025)",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Reminders about Discipleship",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/Reminders%20about%20Discipleship.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Series of Ways of Walking as Believers (Believer s Love Walk)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/Series%20of%20Ways%20of%20Walking%20as%20Believers%20%28Believer_s%20Love%20Walk%29.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "TRAINING IN THE MINISTRY OF PRAYERS TRACK 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/TRAINING%20IN%20THE%20MINISTRY%20OF%20PRAYERS-TRACK%201.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "TRAINING IN THE MINISTRY OF PRAYERS TRACK 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/TRAINING%20IN%20THE%20MINISTRY%20OF%20PRAYERS-TRACK%202.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "TRAINING IN THE MINISTRY OF PRAYERS TRACK 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/TRAINING%20IN%20THE%20MINISTRY%20OF%20PRAYERS-TRACK%203.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Mission of the Church   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/The%20Mission%20of%20the%20Church%20-%20Track%201.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Mission of the Church   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/The%20Mission%20of%20the%20Church%20-%20Track%202.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Words of Jesus (The Letters to the 7 Churches of Revelation)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRAINING%20OF%20THE%20SPIRIT%202025/The%20Words%20of%20Jesus%20%28The%20Letters%20to%20the%207%20Churches%20of%20Revelation%29.mp3",
    series: "TRAINING OF THE SPIRIT 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Impartations and Revivals Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRECA%20Conference%202025/Impartations%20and%20Revivals%20Track%201.mp3",
    series: "TRECA Conference 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Impartations and Revivals Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRECA%20Conference%202025/Impartations%20and%20Revivals%20Track%202.mp3",
    series: "TRECA Conference 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Impartations and Revivals Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRECA%20Conference%202025/Impartations%20and%20Revivals%20Track%203.mp3",
    series: "TRECA Conference 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Impartations and Revivals Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRECA%20Conference%202025/Impartations%20and%20Revivals%20Track%204.mp3",
    series: "TRECA Conference 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Impartations and Revivals Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/TRECA%20Conference%202025/Impartations%20and%20Revivals%20Track%205.mp3",
    series: "TRECA Conference 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for the New Year Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year%20Track%203.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for the New Year Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year%20Track%204.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for the New Year Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year%20Track%207.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for the New Year Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year%20Track%208.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for this New Year  Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20this%20New%20Year%20%20Track%205.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for this New Year Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20this%20New%20Year%20Track%201.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for this New Year Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20this%20New%20Year%20Track%202.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Understanding the Rest of God in and for this New Year Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20the%20New%20Year/Understanding%20the%20Rest%20of%20God%20in%20and%20for%20this%20New%20Year%20Track%206.mp3",
    series: "Understanding the Rest of God in and for the New Year",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why the Training of the Spirit   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Why%20the%20Training%20of%20the%20Spirit/Why%20the%20Training%20of%20the%20Spirit%20-%20Track%201.mp3",
    series: "Why the Training of the Spirit",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why the Training of the Spirit   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Why%20the%20Training%20of%20the%20Spirit/Why%20the%20Training%20of%20the%20Spirit%20-%20Track%202.mp3",
    series: "Why the Training of the Spirit",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why the Training of the Spirit   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Why%20the%20Training%20of%20the%20Spirit/Why%20the%20Training%20of%20the%20Spirit%20-%20Track%203.mp3",
    series: "Why the Training of the Spirit",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why the Training of the Spirit   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Why%20the%20Training%20of%20the%20Spirit/Why%20the%20Training%20of%20the%20Spirit%20-%20Track%204.mp3",
    series: "Why the Training of the Spirit",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Why the Training of the Spirit   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Why%20the%20Training%20of%20the%20Spirit/Why%20the%20Training%20of%20the%20Spirit%20-%20Track%205.mp3",
    series: "Why the Training of the Spirit",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  // 2025 Additional Sermons
  {
    title: "2025 Church Retreat 1st Charge",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/2025%20Church%20Retreat%201st%20Charge.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 3 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/Preaching%20The%20Gospel-Track%203%20Church%20Retreat%202025.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 4 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/Preaching%20The%20Gospel-Track%204%20Church%20Retreat%202025.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Preaching The Gospel Track 5 Church Retreat 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/Preaching%20The%20Gospel-Track%205%20Church%20Retreat%202025.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Ministry of Prayer Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/The%20Ministry%20of%20Prayer%20Track%201.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Ministry of Prayer Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/2025%20church%20retreat/The%20Ministry%20of%20Prayer%20Track%202.mp3",
    series: "2025 church retreat",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "As we Prepare for Life In Christ Conference 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/As%20we%20Prepare%20for%20Life%20In%20Christ%20Conference%202025.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building strong local Churches Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Building%20strong%20local%20Churches/Building%20strong%20local%20Churches%20Track%201.mp3",
    series: "Building strong local Churches",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building strong local Churches Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Building%20strong%20local%20Churches/Building%20strong%20local%20Churches%20Track%202.mp3",
    series: "Building strong local Churches",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building strong local Churches Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Building%20strong%20local%20Churches/Building%20strong%20local%20Churches%20Track%203.mp3",
    series: "Building strong local Churches",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building strong local Churches Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Building%20strong%20local%20Churches/Building%20strong%20local%20Churches%20Track%204.mp3",
    series: "Building strong local Churches",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Building strong local Churches Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Building%20strong%20local%20Churches/Building%20strong%20local%20Churches%20Track%205.mp3",
    series: "Building strong local Churches",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversation on Giving   Track 10",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversation%20on%20Giving%20-%20Track%2010.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversation on Giving   Track 11",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversation%20on%20Giving%20-%20Track%2011.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversation on Giving   Track 9",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversation%20on%20Giving%20-%20Track%209.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%201.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%202.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 3",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%203.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 4",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%204.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 5",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%205.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 6",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%206.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 7",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%207.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Conversations on Giving   Track 8",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Conversations%20on%20Giving/Conversations%20on%20Giving%20-%20Track%208.mp3",
    series: "Conversations on Giving",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Desire",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Desire.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "End of the Year Service 2025 Prayers",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/End%20of%20the%20Year%20Service%202025%20Prayers.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "End of the year service 2025",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/End%20of%20the%20year%20service%202025.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Faithful Sons",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Faithful%20Sons.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Following the Leading of God's Spirit Series 6   Track 1",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Following%20the%20Leading%20of%20God%27s%20Spirit%20Series%206%20-%20Track%201.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "April 2025 Healing Meeting (How to receive Healing Miracles 1)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/April%202025%20Healing%20Meeting%20%28How%20to%20receive%20Healing%20Miracles%201%29.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "August 2025 Healing Meeting (How to receive Healing Miracles 5) 071251",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/August%202025%20Healing%20Meeting%20%28How%20to%20receive%20Healing%20Miracles%205%29_071251.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "December 2025 Healing Meeting",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/December%202025%20Healing%20Meeting.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "How to Receive healing Miracles (JUNE 2025 HEALING MEETING)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/How%20to%20Receive%20healing%20Miracles%20%28JUNE%202025%20HEALING%20MEETING%29.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "JANUARY 2025 HEALING MEETING   GOD OF ALL FLESH 2",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/JANUARY%202025%20HEALING%20MEETING%20-%20GOD%20OF%20ALL%20FLESH%202.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "July 2025 Healing Meeting (How to receive Healing Miracles 4)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/July%202025%20Healing%20Meeting%20%28How%20to%20receive%20Healing%20Miracles%204%29.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "LIFE IN CHRIST CONFERENCE  2025 SESSION 8 (February 2025 Healing Meeting)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/LIFE%20IN%20CHRIST%20CONFERENCE%20%202025%20SESSION%208%20%28February%202025%20Healing%20Meeting%29.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "March 2025 Healing Meeting by Pastor Tayo",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/March%202025%20Healing%20Meeting%20by%20Pastor%20Tayo.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "May 2025 Healing Meeting (How to receive Healing Miracles 2)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/May%202025%20Healing%20Meeting%20%28How%20to%20receive%20Healing%20Miracles%202%29.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "November 2025 Healing Meeting",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/November%202025%20Healing%20Meeting.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "October 2025 Healing Meeting",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/October%202025%20Healing%20Meeting.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "September 2025 Healing Meeting",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Healing%20Meetings/September%202025%20Healing%20Meeting.mp3",
    series: "Healing Meetings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Ikirun Gospel Crusade  Friday Evening Session(Great Power Great Grace)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Ikirun%20Gospel%20crusade%202025/Ikirun%20Gospel%20Crusade%20%20Friday%20Evening%20Session%28Great%20Power%20Great%20Grace%29.mp3",
    series: "Ikirun Gospel crusade 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Ikirun Gospel Crusade  Saturday Evening Session(Great Power Great Grace)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Ikirun%20Gospel%20crusade%202025/Ikirun%20Gospel%20Crusade%20%20Saturday%20Evening%20Session%28Great%20Power%20Great%20Grace%29.mp3",
    series: "Ikirun Gospel crusade 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Ikirun Gospel Crusade  Saturday Morning Session(Great Power Great Grace)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Ikirun%20Gospel%20crusade%202025/Ikirun%20Gospel%20Crusade%20%20Saturday%20Morning%20Session%28Great%20Power%20Great%20Grace%29.mp3",
    series: "Ikirun Gospel crusade 2025",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Order in Your Life (Being Industrious)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Order%20in%20Your%20Life%20%28Being%20Industrious%29.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "PUT ON THE WHOLE ARMOUR OF GOD",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/PUT%20ON%20THE%20WHOLE%20ARMOUR%20OF%20GOD.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Practice of The House of God",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Practice%20of%20The%20House%20of%20God.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Proofs of Your Ministry",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Proofs%20of%20Your%20Ministry.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Staying Fresh Supernaturally",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Staying%20Fresh%20Supernaturally.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "Supernatural Order in Our Lives and Ministry",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/Supernatural%20Order%20in%20Our%20Lives%20and%20Ministry.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Importance Of The Local Church",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/The%20Importance%20Of%20The%20Local%20Church.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  },
  {
    title: "The Vision of the Local Church   (2025)",
    audioUrl: "https://archive.org/download/elgcc-teachings-2025/The%20Vision%20of%20the%20Local%20Church%20-%20%282025%29.mp3",
    series: "General Teachings",
    year: 2025,
    speaker: "Stephen Tijesuni Oyagbile"
  }
];

// Helper to get consistent gradient for series
const getSeriesGradient = (series: string) => {
  switch (series) {
    case 'Open Doors':
      return 'from-[#6B7F4C] to-[#8B7355]'; // Olive to Brown
    case 'The Joy of the Lord':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Brown to Gold (approx)
    case 'Psalms':
      return 'from-[#556339] to-[#6B7F4C]'; // Dark Olive to Olive
    case 'Reviews':
      return 'from-[#2A2A2A] to-[#6B7F4C]'; // Dark to Olive
    case 'General Teachings':
      return 'from-[#4A5D3E] to-[#7A8B6F]'; // Forest Green to Sage
    case 'Special Messages':
      return 'from-[#8B7355] to-[#6B7F4C]'; // Brown to Olive
    // 2016 Series
    case 'NEW CREATION REALITIES':
      return 'from-[#5C7A4A] to-[#8FA878]'; // Deep Green to Light Green
    case 'Our Commitment to Christ':
      return 'from-[#7A6B4F] to-[#A89968]'; // Tan to Beige
    case 'Our Consecration to the Lord':
      return 'from-[#6B5D4A] to-[#9B8B6F]'; // Brown to Taupe
    case 'Salvation & Service':
      return 'from-[#8B7F4C] to-[#B8A878]'; // Olive Gold to Light Gold
    case 'The New Testament Minitsry':
      return 'from-[#5A6B3E] to-[#7A8B5E]'; // Moss to Sage
    case 'The Righteousness of God':
      return 'from-[#6B7A4C] to-[#9BAA78]'; // Green to Light Sage
    case 'Understanding the OT & NT':
      return 'from-[#4A5D3E] to-[#6A8D5E]'; // Forest to Meadow
    case 'Work of the Gospel':
      return 'from-[#7A8B5F] to-[#AAB88F]'; // Sage to Light Sage
    // 2017 Series
    case 'Apt to Teach':
      return 'from-[#6A7B4E] to-[#9AAB7E]'; // Olive Green to Light Olive
    case 'Born of the Spirit':
      return 'from-[#5D6E4A] to-[#8D9E7A]'; // Deep Olive to Pale Olive
    case 'ECCLESIOLOGY series 1':
      return 'from-[#7B8C5F] to-[#ABBC8F]'; // Sage to Light Sage
    case 'Fulfilling Our Purpose':
      return 'from-[#6B7C4F] to-[#9BAC7F]'; // Green Olive to Light Green
    case 'INVESTIGATING GOD\'S NATURE':
      return 'from-[#5A6B3D] to-[#8A9B6D]'; // Dark Moss to Light Moss
    case 'Knowing the Father\'s Nature':
      return 'from-[#6A7A4C] to-[#9AAA7C]'; // Olive to Light Olive
    case 'NEW TESTAMENT WORSHIP':
      return 'from-[#7A8A5C] to-[#AABA8C]'; // Sage Green to Light Sage
    case 'OUR SALVATION IN CHRIST SERIES 1':
      return 'from-[#5B6C3F] to-[#8B9C6F]'; // Forest to Meadow Green
    case 'OUR SERVICE UNTO THE LORD':
      return 'from-[#6B7B4D] to-[#9BAB7D]'; // Olive to Pale Olive
    case 'PREACHING THE GOSPEL 1':
      return 'from-[#7A8B5D] to-[#AABB8D]'; // Sage to Light Sage
    case 'Prayers Series  Pastor Stephen':
      return 'from-[#5C6D3E] to-[#8C9D6E]'; // Deep Green to Light Green
    case 'Spiritual Gifts':
      return 'from-[#6A7A4E] to-[#9AAA7E]'; // Olive Green to Light Olive
    case 'Spiritual Growth':
      return 'from-[#5B6B3F] to-[#8B9B6F]'; // Forest Green to Meadow
    case 'THE PRECIOUS GIFT OF THE SPIRIT':
      return 'from-[#7B8B5E] to-[#ABBB8E]'; // Sage to Light Sage
    case 'UNDERSTANDING GIVING':
      return 'from-[#6B7B4E] to-[#9BAB7E]'; // Olive to Light Olive
    case 'WHAT HAPPENED IN CHRIST':
      return 'from-[#5A6A3E] to-[#8A9A6E]'; // Dark Olive to Light Olive
    // 2018 Series
    case 'CHRISTIAN REWARDS':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case 'CHRISTIANITY AND HONOUR':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme
    case 'COST OF DISCIPLESHIP':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme
    case 'Christianity and Material Wealth':
      return 'from-[#4C7F5F] to-[#78A88F]'; // Emerald Theme
    case 'Explaining the Old Testament Series':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme
    case 'I BELIEVE IN MIRACLES':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    case 'MY LOVE WALK':
      return 'from-[#7F4C6B] to-[#A87898]'; // Rose Theme
    case 'MY MINISTRY OF LAYING OF HANDS':
      return 'from-[#7F5F4C] to-[#A88568]'; // Amber Theme
    case 'Ministers of the Spirit':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme
    case 'Participating in Christian Gatherings':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    case 'SIGHTS AND SOUNDS IN THE SUPERNATURAL':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme
    case 'THE PASSION OF THE CHURCH':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red Theme (Same as Cost)
    case 'THE REALITY OF ETERNAL LIFE':
      return 'from-[#7F764C] to-[#A89E78]'; // Gold Theme
    case 'The Culture of Soul-winning Series':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme
    case 'The Gospel of Christ':
      return 'from-[#7F7A4C] to-[#A8A278]'; // Light Gold Theme
    case 'The Mission is Possible':
      return 'from-[#556339] to-[#7F8C5F]'; // Growth Green
    // 2019 Series
    case 'ACCOUNTABILITY (WHAT IT MEANS)':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    case 'Christian Commitment Much More':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme
    case 'Church Retreat  August 2019':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case 'ECCLESIOLOGY series 2':
      return 'from-[#7B8C5F] to-[#ABBC8F]'; // Sage to Light Sage
    case 'Following the Leading of God\'s Spirit':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme
    case 'INVESTIGATING THE FATHER\'S NATURE':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme
    case 'OUR SALVATION IN CHRIST SERIES 2':
      return 'from-[#5B6C3F] to-[#8B9C6F]'; // Forest to Meadow Green
    case 'Our Supernatural faculties':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme
    case 'PREACHING THE GOSPEL 2':
      return 'from-[#7A8B5D] to-[#AABB8D]'; // Sage to Light Sage
    // 2020 Series
    case '11. THE COST OF THE WORK':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme
    case '13. ESTABLISHING THE LEADING OF THE SPIRIT; DWELLING IN CONVICTION AND CLARITY':
    case '18. FOLLOWING THE LEADING OF GOD\'S SPIRIT SERIES':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme
    case '14. UNDERSTANDING THE REWARD OF THE MINISTRY OF CHRIST':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case '15. OUR TRUE REJOICING':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme
    case '16. WHERE TWO OR THREE ARE GATHERED; (UNDERSTANDING THE RELATIONSHIP IN CHRIST)':
      return 'from-[#993366] to-[#CC6699]'; // Rose Theme
    case '17. UNDERSTANDING AND SUSTAINING THE MINISTRY OF THE WORD':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme
    case '2. PRAYERS':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme
    case '21. THE LEADING OF THE SPIRIT IN HONOUR':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme
    case '22. FORBEARING ONE ANOTHER IN LOVE; UNDERSTANDING THE CHRISTIAN LOVE WALK':
      return 'from-[#993333] to-[#CC6666]'; // Dark Red Theme
    case '23. PRAYER AND OUR LOVEWALK (SERIES 1)':
    case '23. PRAYER AND OUR LOVEWALK':
      return 'from-[#7F4C6B] to-[#A87898]'; // Rose Theme
    case '24. HUMILITY':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme
    case '25. THE POWER OF INCONVENIENCE':
    case '26. HOW TO RECEIVE THE TRAINING OF THE SPIRIT OF GOD':
    case '27. WHAT TO DO AFTER TRAINING OF THE SPIRIT':
      return 'from-[#556339] to-[#7F8C5F]'; // Growth Green
    case '28. UNDERSTANDING CHRISTIAN DISCIPLESHIP':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    case '29. WHAT DOES IT MEAN TO BE BORN AGAIN':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    case '3. SHOULD A BELIEVER IN CHRIST FAST':
      return 'from-[#6B7F4C] to-[#8F9C6C]'; // Olive Light Theme
    case '4. WITHOUT MURMURINGS OR DISPUTINGS':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    case '5. HOW TO PREPARE FOR CHRISTIAN MEETINGS':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme
    case '6. THE PRACTISE OF GIVING':
      return 'from-[#7F764C] to-[#A89E78]'; // Gold Theme
    case '7 THE GOSPEL; OUR ATTITUDE & OUR PREDETERMINED RESPONSE':
      return 'from-[#7F7A4C] to-[#A8A278]'; // Light Gold Theme
    case '8. ASSURED IN CHRIST, I AM NOT AFRAID':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    case '9. NOTHING IS WRONG WITH YOU; DWELLING IN FORGIVENESS OF SINS':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme
    case 'Church Retreat 2020':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    // 2021 Series
    case '10. THE KNOWLEDGE OF GOD\'S STEADFAST LOVE IN CHRIST':
      return 'from-[#993366] to-[#CC6699]'; // Rose Theme (Love)
    case '11. CONCERNING UTTERANCE':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    case '12. CONTENDING IN THIS WORK (IT IS TIME TO WAR)':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme (War)
    case '13. CONTENDING IN & FOR SUPERNATURAL RELATIONSHIPS (WINNING WITH WISDOM)':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme (relationship/wisdom)
    case '14. THE MINISTRY OF LAYING ON OF HANDS (WHAT IT MEANS & HOW TO RECEIVE IT)':
      return 'from-[#7F5F4C] to-[#A88568]'; // Amber Theme (Hands/Impartation)
    case '16. CHRISTIAN GIVING (UNDERSTANDING TRUE RICHES)':
      return 'from-[#7F764C] to-[#A89E78]'; // Gold Theme (Riches)
    case '2. SUPERNATURALLY CONSCIOUS IN DISCIPLESHIP':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme (Discipleship)
    case '2021 2':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme (General)
    case '3. THE HARVEST OF GOD':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme (Harvest)
    case '7. FOLLOWING THE LEADING OF THE SPIRIT (SERIES 3)':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme (Spirit)
    case '8. APPRECIATION & HONOUR':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme (Honour)
    case '9. EXCEEDING GREATNESS OF HIS POWER':
      return 'from-[#993333] to-[#CC6666]'; // Dark Red Theme (Power)
    case 'CHURCH RETREAT 2021':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case 'JOS BRETHREN RETREAT':
      return 'from-[#556339] to-[#7F8C5F]'; // Growth Green (Retreat)
    case 'UTTERANCE & INSTRUCTIONS':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme
    // 2022 Series
    case '1. PRIORITY; A SUPERNATURAL ORDERED 2022':
      return 'from-[#4C7F5F] to-[#78A88F]'; // Emerald Theme (Priority)
    case '10. HOW TO FLOW WITH THE SPIRIT OF GOD IN SPECIAL MEETINGS series 2':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme (Flow/Spirit)
    case '11. DEALING WITH THE ATTACKS OF THE ENEMY (THE PLACE & IMPORTANCE OF UNITY)':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme (Warfare)
    case '13. A SACRED ATTITUDE IN THE LOCAL CHURCH':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme (Sacred/Reverence)
    case '14. MIRACLES':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange/Gold Theme (Miracles)
    case '15. COMMITMENT':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme (Commitment)
    case '16. CHURCH RETREAT 2022':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme (Retreat)
    case '17. HOW TO BE A BLESSING IN THIS LOCAL CHURCH':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme (Blessing)
    case '18. OUR SUPERNATURAL FACULTIES SERIES 2':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme (Supernatural)
    case '2. BIBLE INTERPRETATION':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme (Word)
    case '20. NECESSITY OF PRAYERS':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme (Prayer)
    case '3. A LIFE OF TOTAL CONSECRATION TO GOD\'S PLAN':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme (Consecration)
    case '5. HEALING SERVICES':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal/Turquoise Theme (Healing)
    case '6. SUPERNATURAL BOLDNESS; WORKING IN THE CONFIDENCE OF THE SPIRIT (CHRIST WORKING IN AND THROUGH THE CHURCH)':
      return 'from-[#993333] to-[#CC6666]'; // Dark Red Theme (Boldness)
    case '7. THE CROSS; THE COST OF THE CAUSE':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red Theme (Cross)
    case '8. THE WONDERFUL NAME OF JESUS':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme (Name)
    case '9. THE RESSURECTION; AN INSTRUCTION':
      return 'from-[#7F7A4C] to-[#A8A278]'; // Light Gold Theme (Resurrection/Life)
    case 'LEADERS, AND WORKERS\' MEETING':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme (Leadership)
    case 'PSALMS GIVEN':
      return 'from-[#556339] to-[#6B7F4C]'; // Dark Olive Theme (Psalms)
    case 'THE BASICS OF DISCIPLESHIP (LEADERS, AND WORKERS\' MEETING 2022)':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme (Basics)
    case 'THE MISSION IS POSSIBLE':
    case 'THE MISSION IS POSSIBLE (OFFA)':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme (Mission)

    // 2023 Series
    case '1. REDEEMING THE TIMES (NEW YEAR EXHORTATION)':
      return 'from-[#4C7F5F] to-[#78A88F]'; // Emerald Theme
    case '10. How to Handle Difficult Disciples':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme
    case '11. The Leading of God\'s Spirit Series 5':
    case '2. THE LEADINGS AND DEALINGS OF THE SPIRIT':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme
    case '12. What are you doing with the Seed in your Hands':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme
    case '14. How to Handle the Spirit of Offence':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red/Crimson Theme
    case '3. DOMINION IN CHRIST':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case '5. OUR SUPERNATURAL FACULTIES SERIES 2B':
      return 'from-[#5D4A6B] to-[#8D7A9E]'; // Purple Theme
    case '6. Building By Wisdom- The Basics':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    case '8. The Preparations of the Kingdom (The Place of Surrender)':
      return 'from-[#7F764C] to-[#A89E78]'; // Gold Theme
    case '9. Fulfilling your Ministry':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme
    case 'APATA GOSPEL INVASION':
      return 'from-[#993333] to-[#CC6666]'; // Dark Red Theme
    case 'Church Retreat 2023':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case 'SUPERNATURAL BLESSINGS (IKIRUN 2023)':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    // 2024 and 2025 Series
    case '1. Understanding the Purpose of Man in Time':
    case 'Understanding the Rest of God in and for the New Year':
      return 'from-[#4C7F5F] to-[#78A88F]'; // Emerald Theme
    case '4. Pillar of Wisdom; Wisdom of Accountability':
    case 'HEALING MEETINGS 2024':
    case 'Healing Meetings':
      return 'from-[#4C7F7A] to-[#78A8A2]'; // Teal Theme
    case '6. What to do after a \'Great\' Encounter with God':
    case 'Our Supernatural Faculties Series 2C':
    case 'Building strong local Churches':
      return 'from-[#664C7F] to-[#9278A8]'; // Violet Theme
    case '7 Pillars of Healthy Living':
    case 'Training Of The Spirit 2024':
    case 'TRAINING OF THE SPIRIT 2025':
      return 'from-[#CC7A00] to-[#FF9933]'; // Orange Theme
    case '7. Winning with Words':
    case 'Christian Generosity':
    case 'Conversations on Giving':
      return 'from-[#7F6B4C] to-[#A89268]'; // Bronze Theme
    case 'Amazing Grace TRECA Conference 2024':
    case 'Church Retreat 2024':
    case 'TRECA Conference 2025':
    case '2025 church retreat':
      return 'from-[#8B7355] to-[#D4C5A8]'; // Gold Theme
    case 'Be Anxious for Nothing (Finding God\'s Peace in the Midst of Storms)':
      return 'from-[#5A6A7A] to-[#8A9AAA]'; // Blue-Gray Theme
    case 'Building one Another; Being my Brother\'s Keeper':
    case 'No Weapon formed against you shall Prosper':
      return 'from-[#7F4C4C] to-[#A86868]'; // Red Theme
    case 'Continuity In The Training of The Spirit':
      return 'from-[#4C737F] to-[#789CA8]'; // Sky Blue Theme
    case 'How to make your church Grow':
    case 'LICC 2024':
    case 'LICC 2025 TEACHINGS':
      return 'from-[#556339] to-[#7F8C5F]'; // Growth Green Theme
    case 'OAU CRUSADE 2024':
    case 'OAU CRUSADE 2025':
    case 'Ikirun Gospel crusade 2025':
      return 'from-[#993333] to-[#CC6666]'; // Dark Red Theme
    case 'Our Salvation In Christ Series 3 (2024)':
    case 'Our Salvation  In Christ Series 3 (2025)':
      return 'from-[#5B6C3F] to-[#8B9C6F]'; // Meadow Green Theme
    case 'Preaching the Gospel 2024':
    case 'Preaching the Gospel (2025)':
      return 'from-[#7A8B5D] to-[#AABB8D]'; // Sage Theme
    case 'Secondary School 2024':
      return 'from-[#7F7A4C] to-[#A8A278]'; // Light Gold Theme
    case 'jos 2024':
      return 'from-[#6B7F4C] to-[#1A1A1A]'; // Olive Theme
    case 'Why the Training of the Spirit':
      return 'from-[#4C6B7F] to-[#7898A8]'; // Blue Theme
    default:
      return 'from-[#6B7F4C] to-[#1A1A1A]'; // Olive to Dark
  }
};

export default function TeachingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [expandedSeries, setExpandedSeries] = useState<Set<string>>(new Set());

  // Get unique years
  const years = Array.from(new Set(sermons.map(s => s.year))).sort((a, b) => b - a);

  // Filter sermons
  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === 'all' || sermon.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  // Group by series
  const seriesList = Array.from(new Set(filteredSermons.map(s => s.series)));
  const sermonsBySeries = seriesList.map(series => ({
    series,
    sermons: filteredSermons.filter(s => s.series === series),
    count: filteredSermons.filter(s => s.series === series).length
  }));

  const toggleSeries = (series: string) => {
    const newExpanded = new Set(expandedSeries);
    if (newExpanded.has(series)) {
      newExpanded.delete(series);
    } else {
      newExpanded.add(series);
    }
    setExpandedSeries(newExpanded);
  };

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Header */}
      <div className="bg-dark-lighter py-16 border-b border-primary/10">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">TEACHINGS </span>
            <span className="gradient-text">AND SONGS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore our collection of powerful messages from Pastor Stephen Tijesuni Oyagbile
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-dark-lighter/50 py-6 border-b border-primary/10">
        <div className="container-custom">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search teachings or series..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-dark border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Year Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedYear === 'all'
                  ? 'bg-primary text-dark'
                  : 'bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30'
                  }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedYear === year
                    ? 'bg-primary text-dark'
                    : 'bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-white/60 text-sm">
              {filteredSermons.length} {filteredSermons.length === 1 ? 'message' : 'messages'} • {sermonsBySeries.length} {sermonsBySeries.length === 1 ? 'series' : 'series'}
            </div>
          </div>
        </div>
      </div>

      {/* Sermons by Series */}
      <div className="container-custom py-16">
        <div className="space-y-6">
          {sermonsBySeries.map(({ series, sermons: seriesSermons, count }) => (
            <div key={series} className="border border-white/10 rounded-xl overflow-hidden bg-dark-card">
              {/* Series Header */}
              <button
                onClick={() => toggleSeries(series)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-white">{series}</h2>
                    <p className="text-white/60 text-sm">{count} {count === 1 ? 'message' : 'messages'}</p>
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 text-white/60 transition-transform ${expandedSeries.has(series) ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Series Content */}
              {expandedSeries.has(series) && (
                <div className="border-t border-white/10 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {seriesSermons.map((sermon, index) => (
                      <div
                        key={index}
                        className="bg-dark rounded-lg overflow-hidden border border-white/10 hover:border-primary/30 transition-all group"
                      >
                        {/* Thumbnail or CSS Placeholder */}
                        <div className="relative h-48 overflow-hidden">
                          {sermon.thumbnail ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={sermon.thumbnail}
                              alt={sermon.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            // CSS Gradient Placeholder
                            <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br ${getSeriesGradient(sermon.series)}`}>
                              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 w-full">
                                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2 block border border-white/20 rounded-full px-2 py-0.5 w-fit mx-auto bg-black/10 backdrop-blur-sm">
                                  {sermon.series}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight shadow-sm line-clamp-2 px-2">
                                  {sermon.title}
                                </h3>
                                <div className="w-8 h-0.5 bg-white/40 mx-auto rounded-full mb-2"></div>
                                <p className="text-white/90 text-[10px] font-medium tracking-wide">{sermon.speaker || "Stephen Tijesuni Oyagbile"}</p>
                              </div>

                              {/* Decorative Overlay */}
                              <div className="absolute inset-0 bg-black/10"></div>
                              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                            </div>
                          )}

                          {/* Play Icon Overlay */}
                          <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[1px]">
                            <div className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300 hover:bg-white hover:text-primary">
                              <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-dark-lighter">
                          {/* Audio Player */}
                          <div className="mb-3">
                            <audio
                              controls
                              preload="none"
                              className="w-full h-8 rounded opacity-80 hover:opacity-100 transition-opacity"
                            >
                              <source src={sermon.audioUrl} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>

                          {/* Download Button */}
                          <a
                            href={sermon.audioUrl}
                            download
                            className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-primary hover:text-dark text-white/60 hover:text-dark font-medium px-3 py-2 rounded-lg transition-all text-xs group/btn border border-white/5 hover:border-transparent"
                          >
                            <svg className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Message
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-16">
            <div className="text-white/40 text-lg">
              No messages found matching &quot;{searchQuery}&quot;
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
