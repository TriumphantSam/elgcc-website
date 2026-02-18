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

    // Psalms Series
    { title: "Psalms by Pastor 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%201.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms 4th Feb", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/psalms%204th%20feb.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms by Pastor Yewande (16th Jan 2026) - it is my year of the open doors", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%20Yewande%20%2816th%20Jan%202026%29-%20it%20is%20my%20year%20of%20the%20open%20doors.mp3", series: "Psalms", year: 2026, speaker: "Pastor Yewande" },
    { title: "Psalms by Pastor (16th Jan 2026) - The Honor of the Lord", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20Honor%20of%20the%20Lord.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms by Pastor (16th Jan 2026) - The doors are opened", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20doors%20are%20opened.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

    // Reviews
    { title: "Review of Joy of the Lord by Pastor Tayo Esho Aduragbemi", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Tayo%20Esho%20Aduragbemi.mp3", series: "Reviews", year: 2026, speaker: "Pastor Tayo Esho Aduragbemi" },
    { title: "Review of Joy of the Lord by Pastor Tayo Esho", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Tayo%20Esho.mp3", series: "Reviews", year: 2026, speaker: "Pastor Tayo Esho" },
    { title: "Review of Joy of the Lord by Pastor Yewande", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Yewande.mp3", series: "Reviews", year: 2026, speaker: "Pastor Yewande" },

    // Special Messages
    { title: "January 2026 Healing Meeting", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/January%202026%20Healing%20Meeting.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Joy of the Lord (Impartation and prophecy 11th February 2026)", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Joy%20of%20the%20Lord%20%28Impartation%20and%20prophecy%2011th%20February%202026%29.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },


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
