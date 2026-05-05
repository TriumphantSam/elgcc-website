'use client';

import { useState } from 'react';
import { getAudioType, sermons } from '@/lib/teachings';

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
    // 2026 Series
    case 'LIFE IN CHRIST CONFERENCE 2026':
      return 'from-[#7B4C8B] to-[#A878C8]'; // Royal Purple Theme
    case 'Believers Authority':
      return 'from-[#8B4C4C] to-[#C87878]'; // Ruby Red Theme
    case 'Miracles in your Mouth':
      return 'from-[#4C8B7B] to-[#78C8B8]'; // Aqua Marine Theme
    case 'What to do after Life In Christ Conference 2026':
      return 'from-[#335588] to-[#6688BB]'; // Indigo Theme
    case 'Ogba Crusade 2026':
      return 'from-[#B85C00] to-[#E88C30]'; // Amber/Flame Theme (Crusade)
    case "Ministers' Conference Teaching Session Ogba Lagos Crusade 2026":
      return 'from-[#5C2D8B] to-[#9B5CC8]'; // Deep Violet (Ministers' Conference)
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

  // Group by series, sorted newest year first
  const seriesList = Array.from(new Set(filteredSermons.map(s => s.series)));
  const sermonsBySeries = seriesList.map(series => ({
    series,
    sermons: filteredSermons.filter(s => s.series === series),
    count: filteredSermons.filter(s => s.series === series).length,
    year: filteredSermons.filter(s => s.series === series)[0]?.year ?? 0
  })).sort((a, b) => b.year - a.year);

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
          {sermonsBySeries.map(({ series, sermons: seriesSermons, count, year }) => (
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
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-bold text-white">{series}</h2>
                      {selectedYear === 'all' && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                          {year}
                        </span>
                      )}
                    </div>
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
                              {/* Year Badge */}
                              <div className="absolute top-3 left-3 z-20 bg-black/40 backdrop-blur-sm text-white/90 font-bold text-xs px-2.5 py-1 rounded-full border border-white/20">
                                {sermon.year}
                              </div>
                              {/* Track Number Badge */}
                              {(() => {
                                const trackMatch = sermon.title.match(/Track\s*(\d+)/i);
                                return trackMatch ? (
                                  <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm text-white font-bold text-xs px-2.5 py-1 rounded-full border border-white/20">
                                    Track {trackMatch[1]}
                                  </div>
                                ) : null;
                              })()}
                              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 w-full">
                                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2 block border border-white/20 rounded-full px-2 py-0.5 w-fit mx-auto bg-black/10 backdrop-blur-sm">
                                  {sermon.series}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight shadow-sm line-clamp-3 px-2">
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
                              <source src={sermon.audioUrl} type={getAudioType(sermon.audioUrl)} />
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
