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
