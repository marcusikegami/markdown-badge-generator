const arr = [
    {
      name: '![Amazon Alexa](https://img.shields.io/badge/amazon%20alexa-52b5f7?style=for-the-badge&logo=amazon%20alexa&logoColor=white)',
      badge: undefined
    },
    {
      name: '![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)',
      badge: 'Dependabot'
    },
    {
      name: '![Google Assistant](https://img.shields.io/badge/google%20assistant-4285F4?style=for-the-badge&logo=google%20assistant&logoColor=white)',
      badge: 'Google Assistant'
    },
    {
      name: '![Hyperledger](https://img.shields.io/badge/hyperledger-2F3134?style=for-the-badge&logo=hyperledger&logoColor=white)',
      badge: 'Hyperledger'
    },
    {
      name: '![Blogger](https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white)',
      badge: 'Blogger'
    },
    {
      name: '![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)',
      badge: 'Dev'
    },
    {
      name: '![Ghost](https://img.shields.io/badge/ghost-000?style=for-the-badge&logo=ghost&logoColor=%23F7DF1E)',
      badge: 'Ghost'
    },
    {
      name: '![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)',
      badge: 'Hashnode'
    },
    {
      name: '![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)',
      badge: 'Medium'
    },
    {
      name: '![Micro.blog](https://img.shields.io/badge/Micro.blog-FF8800?style=for-the-badge&logo=micro.blog&logoColor=white)',
      badge: 'Micro.blog'
    },
    {
      name: '![Rss](https://img.shields.io/badge/rss-F88900?style=for-the-badge&logo=rss&logoColor=white)',
      badge: 'Rss'
    },
    {
      name: '![Wix](https://img.shields.io/badge/wix-000?style=for-the-badge&logo=wix&logoColor=white)',
      badge: 'Wix'
    },
    {
      name: '![Brave](https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white)',
      badge: 'Brave'
    },
    {
      name: '![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)',
      badge: 'Edge'
    },
    {
      name: '![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox&logoColor=white)',
      badge: 'Firefox'
    },
    {
      name: '![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)',
      badge: 'Google Chrome'
    },
    {
      name: '![IE](https://img.shields.io/badge/Internet%20Explorer-0076D6?style=for-the-badge&logo=Internet%20Explorer&logoColor=white)',
      badge: 'IE'
    },
    {
      name: '![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)',
      badge: 'Opera'
    },
    {
      name: '![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)',
      badge: 'Safari'
    },
    {
      name: '![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)',
      badge: 'Tor'
    },
    {
      name: '![Vivaldi](https://img.shields.io/badge/Vivaldi-EF3939?style=for-the-badge&logo=Vivaldi&logoColor=white)',
      badge: 'Vivaldi'
    },
    {
      name: '![CircleCI](https://img.shields.io/badge/circleci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)',
      badge: 'CircleCI'
    },
    {
      name: '![GitLab CI](https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)',
      badge: 'GitLab CI'
    },
    {
      name: '![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)',
      badge: 'GitHub Actions'
    },
    {
      name: '![TravisCI](https://img.shields.io/badge/travis%20ci-%232B2F33.svg?style=for-the-badge&logo=travis&logoColor=white)',
      badge: 'TravisCI'
    },
    {
      name: '![Octopus Deploy](https://img.shields.io/badge/octopus%20deploy-0D80D8?style=for-the-badge&logo=octopusdeploy&logoColor=white)',
      badge: 'Octopus Deploy'
    },
    {
      name: '![Dropbox](https://img.shields.io/badge/Dropbox-%233B4D98.svg?style=for-the-badge&logo=Dropbox&logoColor=white)',
      badge: 'Dropbox'
    },
    {
      name: '![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)',
      badge: 'Google Drive'
    },
    {
      name: '![Mega.nz](https://img.shields.io/badge/Mega-%23D90007.svg?style=for-the-badge&logo=Mega&logoColor=white)',
      badge: 'Mega.nz'
    },
    {
      name: '![Amp](https://img.shields.io/badge/Amp-005AF0?style=for-the-badge&logo=amp&logoColor=white)',
      badge: 'Amp'
    },
    {
      name: '![Bitcoin](https://img.shields.io/badge/Bitcoin-000?style=for-the-badge&logo=bitcoin&logoColor=white)',
      badge: 'Bitcoin'
    },
    {
      name: '![Bitcoin Cash](https://img.shields.io/badge/Bitcoin%20Cash-0AC18E?style=for-the-badge&logo=Bitcoin%20Cash&logoColor=white)',
      badge: 'Bitcoin Cash'
    },
    {
      name: '![Bitcoin SV](https://img.shields.io/badge/Bitcoin%20SV-EAB300?style=for-the-badge&logo=Bitcoin%20SV&logoColor=white)',
      badge: 'Bitcoin SV'
    },
    {
      name: '![Binance](https://img.shields.io/badge/Binance-FCD535?style=for-the-badge&logo=binance&logoColor=white)',
      badge: 'Binance'
    },
    {
      name: '![Chainlink](https://img.shields.io/badge/Chainlink-375BD2?style=for-the-badge&logo=Chainlink&logoColor=white)',
      badge: 'Chainlink'
    },
    {
      name: '![Dogecoin](https://img.shields.io/badge/dogecoin-B59A30?style=for-the-badge&logo=dogecoin&logoColor=white)',
      badge: 'Dogecoin'
    },
    {
      name: '![Dash](https://img.shields.io/badge/dash-008DE4?style=for-the-badge&logo=dash&logoColor=white)',
      badge: 'Dash'
    },
    {
      name: '![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)',
      badge: 'Ethereum'
    },
    {
      name: '![Iota](https://img.shields.io/badge/iota-29334C?style=for-the-badge&logo=iota&logoColor=white)',
      badge: 'Iota'
    },
    {
      name: '![Litecoin](https://img.shields.io/badge/Litecoin-A6A9AA?style=for-the-badge&logo=Litecoin&logoColor=white)',
      badge: 'Litecoin'
    },
    {
      name: '![Monero](https://img.shields.io/badge/monero-FF6600?style=for-the-badge&logo=monero&logoColor=white)',
      badge: 'Monero'
    },
    {
      name: '![Polkadot](https://img.shields.io/badge/polkadot-E6007A?style=for-the-badge&logo=polkadot&logoColor=white)',
      badge: 'Polkadot'
    },
    {
      name: '![Stellar](https://img.shields.io/badge/Stellar-7D00FF?style=for-the-badge&logo=Stellar&logoColor=white)',
      badge: 'Stellar'
    },
    {
      name: '![Tether](https://img.shields.io/badge/tether-168363?style=for-the-badge&logo=tether&logoColor=white)',
      badge: 'Tether'
    },
    {
      name: '![Xrp](https://img.shields.io/badge/Xrp-black?style=for-the-badge&logo=xrp&logoColor=white)',
      badge: 'Xrp'
    },
    {
      name: '![Z Cash](https://img.shields.io/badge/Zcash-F4B728?style=for-the-badge&logo=zcash&logoColor=white)',
      badge: 'Z Cash'
    },
    {
      name: '![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)',
      badge: 'AmazonDynamoDB'
    },
    {
      name: '![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)',
      badge: 'Cassandra'
    },
    {
      name: '![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white)',
      badge: 'Cockroach Labs'
    },
    {
      name: '![Couchbase](https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white)',
      badge: 'Couchbase'
    },
    {
      name: '![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)',
      badge: 'MariaDB'
    },
    {
      name: '![MusicBrainz](https://img.shields.io/badge/Musicbrainz-EB743B?style=for-the-badge&logo=musicbrainz&logoColor=BA478F)',
      badge: 'MusicBrainz'
    },
    {
      name: '![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)',
      badge: 'Microsoft SQL Server'
    },
    {
      name: '![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)',
      badge: 'MongoDB'
    },
    {
      name: '![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)',
      badge: 'MySQL'
    },
    {
      name: '![Neo4J](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)',
      badge: 'Neo4J'
    },
    {
      name: '![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)',
      badge: 'Postgres'
    },
    {
      name: '![Realm](https://img.shields.io/badge/Realm-39477F?style=for-the-badge&logo=realm&logoColor=white)',
      badge: 'Realm'
    },
    {
      name: '![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)',
      badge: 'Redis'
    },
    {
      name: '![Single Store](https://img.shields.io/badge/Single%20Store-AA00FF?style=for-the-badge&logo=singlestore&logoColor=white)',
      badge: 'Single Store'
    },
    {
      name: '![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)',
      badge: 'SQLite'
    },
    {
      name: '![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)',
      badge: 'Supabase'
    },
    {
      name: '![Adobe](https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white)',
      badge: 'Adobe'
    },
    {
      name: '![Adobe Acrobat Reader](https://img.shields.io/badge/Adobe%20Acrobat%20Reader-EC1C24.svg?style=for-the-badge&logo=Adobe%20Acrobat%20Reader&logoColor=white)',
      badge: 'Adobe Acrobat Reader'
    },
    {
      name: '![Adobe After Effects](https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white)',
      badge: 'Adobe After Effects'
    },
    {
      name: '![Adobe Audition](https://img.shields.io/badge/Adobe%20Audition-9999FF.svg?style=for-the-badge&logo=Adobe%20Audition&logoColor=white)',
      badge: 'Adobe Audition'
    },
    {
      name: '![Adobe Creative Cloud](https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26.svg?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white)',
      badge: 'Adobe Creative Cloud'
    },
    {
      name: '![Adobe Dreamweaver](https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6.svg?style=for-the-badge&logo=Adobe%20Dreamweaver&logoColor=white)',
      badge: 'Adobe Dreamweaver'
    },
    {
      name: '![Adobe Fonts](https://img.shields.io/badge/Adobe%20Fonts-000B1D.svg?style=for-the-badge&logo=Adobe%20Fonts&logoColor=white)',
      badge: 'Adobe Fonts'
    },
    {
      name: '![Adobe Illustrator](https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)',
      badge: 'Adobe Illustrator'
    },
    {
      name: '![Adobe InDesign](https://img.shields.io/badge/Adobe%20InDesign-49021F?style=for-the-badge&logo=adobeindesign&logoColor=FF3366)',
      badge: 'Adobe InDesign'
    },
    {
      name: '![Adobe Lightroom](https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white)',
      badge: 'Adobe Lightroom'
    },
    {
      name: '![Adobe Lightroom Classic](https://img.shields.io/badge/Adobe%20Lightroom%20Classic-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom%20Classic&logoColor=white)',
      badge: 'Adobe Lightroom Classic'
    },
    {
      name: '![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)',
      badge: 'Adobe Photoshop'
    },
    {
      name: '![Adobe Premiere Pro](https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white)',
      badge: 'Adobe Premiere Pro'
    },
    {
      name: '![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)',
      badge: 'Adobe XD'
    },
    {
      name: '![Aseprite](https://img.shields.io/badge/Aseprite-FFFFFF?style=for-the-badge&logo=Aseprite&logoColor=#7D929E)',
      badge: 'Aseprite'
    },
    {
      name: '![Affinity Designer](https://img.shields.io/badge/affinity%20desginer-%231B72BE.svg?style=for-the-badge&logo=affinity-designer&logoColor=white)',
      badge: 'Affinity Designer'
    },
    {
      name: '![Affinity Photo](https://img.shields.io/badge/affinityphoto-%237E4DD2.svg?style=for-the-badge&logo=affinity-photo&logoColor=white)',
      badge: 'Affinity Photo'
    },
    {
      name: '![Blender](https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white)',
      badge: 'Blender'
    },
    {
      name: '![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)',
      badge: 'Canva'
    },
    {
      name: '![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)',
      badge: 'Dribbble'
    },
    {
      name: '![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)',
      badge: 'Figma'
    },
    {
      name: '![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)',
      badge: 'Framer'
    },
    {
      name: '![Gimp](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)',
      badge: 'Gimp'
    },
    {
      name: '![Inkscape](https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13)',
      badge: 'Inkscape'
    },
    {
      name: '![Invision](https://img.shields.io/badge/invision-FF3366?style=for-the-badge&logo=invision&logoColor=white)',
      badge: 'Invision'
    },
    {
      name: '![Krita](https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B)',
      badge: 'Krita'
    },
    {
      name: '![Proto.io](https://img.shields.io/badge/Proto.io-161637?style=for-the-badge&logo=proto.io&logoColor=00e5ff)',
      badge: 'Proto.io'
    },
    {
      name: '![Sketch](https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black)',
      badge: 'Sketch'
    },
    {
      name: '![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)',
      badge: 'Storybook'
    },
    {
      name: '![CodeChef](https://img.shields.io/badge/CodeChef-%23964B00.svg?style=for-the-badge&logo=CodeChef&logoColor=white)',
      badge: 'CodeChef'
    },
    {
      name: '![Codeforces](https://img.shields.io/badge/Codeforces-445f9d?style=for-the-badge&logo=Codeforces&logoColor=white)',
      badge: 'Codeforces'
    },
    {
      name: '![CodePen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)',
      badge: 'CodePen'
    },
    {
      name: '![LeetCode](https://img.shields.io/badge/Leetcode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)',
      badge: 'LeetCode'
    },
    {
      name: '![Kaggle](https://img.shields.io/badge/Kaggle-035a7d?style=for-the-badge&logo=kaggle&logoColor=white)',
      badge: 'Kaggle'
    },
    {
      name: '![OnePlus Forums](https://img.shields.io/badge/OnePlusForums-%23EB0028.svg?style=for-the-badge&logo=OnePlus&logoColor=white)',
      badge: 'OnePlus Forums'
    },
    {
      name: '![Quora](https://img.shields.io/badge/Quora-%23B92B27.svg?style=for-the-badge&logo=Quora&logoColor=white)',
      badge: 'Quora'
    },
    {
      name: '![Reddit](https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white)',
      badge: 'Reddit'
    },
    {
      name: '![ResearchGate](https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=ResearchGate&logoColor=white)',
      badge: 'ResearchGate'
    },
    {
      name: '![Stack Exchange](https://img.shields.io/badge/StackExchange-%23ffffff.svg?style=for-the-badge&logo=StackExchange&logoColor=white)',
      badge: 'Stack Exchange'
    },
    {
      name: '![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)',
      badge: 'Stack Overflow'
    },
    {
      name: '![XDA-Developers](https://img.shields.io/badge/XDA--Developers-%23AC6E2F.svg?style=for-the-badge&logo=XDA-Developers&logoColor=white)',
      badge: 'XDA-Developers'
    },
    {
      name: '![Bookstack](https://img.shields.io/badge/Bookstack-%230288D1.svg?style=for-the-badge&logo=bookstack&logoColor=white)',
      badge: 'Bookstack'
    },
    {
      name: '![Wikipedia](https://img.shields.io/badge/Wikipedia-%23000000.svg?style=for-the-badge&logo=wikipedia&logoColor=white)',
      badge: 'Wikipedia'
    },
    {
      name: '![Wiki.js](https://img.shields.io/badge/wiki.js-%231976D2.svg?style=for-the-badge&logo=wikidotjs&logoColor=white)',
      badge: 'Wiki.js'
    },
    {
      name: '![Codecademy](https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=1F243A)',
      badge: 'Codecademy'
    },
    {
      name: '![Codewars](https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=black)',
      badge: 'Codewars'
    },
    {
      name: '![Coursera](https://img.shields.io/badge/Coursera-%230056D2.svg?style=for-the-badge&logo=Coursera&logoColor=white)',
      badge: 'Coursera'
    },
    {
      name: '![Datacamp](https://img.shields.io/badge/Datacamp-05192D?style=for-the-badge&logo=datacamp&logoColor=03E860)',
      badge: 'Datacamp'
    },
    {
      name: '![Duolingo](https://img.shields.io/badge/Duolingo-%234DC730.svg?style=for-the-badge&logo=Duolingo&logoColor=white)',
      badge: 'Duolingo'
    },
    {
      name: '![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)',
      badge: 'edX'
    },
    {
      name: '![Exercism](https://img.shields.io/badge/Exercism-009CAB?style=for-the-badge&logo=exercism&logoColor=white)',
      badge: 'Exercism'
    },
    {
      name: '![FreeCodeCamp](https://img.shields.io/badge/Freecodecamp-%23123.svg?style=for-the-badge&logo=freecodecamp&logoColor=green)',
      badge: 'FreeCodeCamp'
    },
    {
      name: '![Future Learn](https://img.shields.io/badge/future%20learn-DE00A5?style=for-the-badge&logo=futurelearn&logoColor=white)',
      badge: 'Future Learn'
    },
    {
      name: '![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-gray?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c)',
      badge: 'GeeksforGeeks'
    },
    {
      name: '![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)',
      badge: 'MDN Web Docs'
    },
    {
      name: '![Microsoft Learn](https://img.shields.io/badge/Microsoft_Learn-258ffa?style=for-the-badge&logo=microsoft&logoColor=white)',
      badge: 'Microsoft Learn'
    },
    {
      name: '![Pluralsight](https://img.shields.io/badge/Pluralsight-EE3057?style=for-the-badge&logo=pluralsight&logoColor=white)',
      badge: 'Pluralsight'
    },
    {
      name: '![Scrimba](https://img.shields.io/badge/scrimba-2B283A?style=for-the-badge&logo=scrimba&logoColor=white)',
      badge: 'Scrimba'
    },
    {
      name: '![Skill Share](https://img.shields.io/badge/Skill%20share-002333?style=for-the-badge&logo=skillshare&logoColor=00FF84)',
      badge: 'Skill Share'
    },
    {
      name: '![Udacity](https://img.shields.io/badge/Udacity-grey?style=for-the-badge&logo=udacity&logoColor=15B8E6)',
      badge: 'Udacity'
    },
    {
      name: '![Udemy](https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white)',
      badge: 'Udemy'
    },
    {
      name: '![Amazon Pay](https://img.shields.io/badge/AmazonPay-ff9900.svg?style=for-the-badge&logo=Amazon-Pay&logoColor=white)',
      badge: 'Amazon Pay'
    },
    {
      name: '![Apple Pay](https://img.shields.io/badge/ApplePay-000000.svg?style=for-the-badge&logo=Apple-Pay&logoColor=white)',
      badge: 'Apple Pay'
    },
    {
      name: '![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)',
      badge: 'BuyMeACoffee'
    },
    {
      name: '![Github-sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)',
      badge: 'Github-Sponsors'
    },
    {
      name: '![Google Pay](https://img.shields.io/badge/GooglePay-%233780F1.svg?style=for-the-badge&logo=Google-Pay&logoColor=white)',
      badge: 'Google Pay'
    },
    {
      name: '![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)',
      badge: 'Ko-Fi'
    },
    {
      name: '![LiberaPay](https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)',
      badge: 'LiberaPay'
    },
    {
      name: '![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)',
      badge: 'Patreon'
    },
    {
      name: '![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)',
      badge: 'PayPal'
    },
    {
      name: '![Paytm](https://img.shields.io/badge/Paytm-1C2C94?style=for-the-badge&logo=paytm&logoColor=05BAF3)',
      badge: 'Paytm'
    },
    {
      name: '![Phonepe](https://img.shields.io/badge/Phonepe-54039A?style=for-the-badge&logo=phonepe&logoColor=white)',
      badge: 'Phonepe'
    },
    {
      name: '![Samsung Pay](https://img.shields.io/badge/SamsungPay-1428A0.svg?style=for-the-badge&logo=Samsung-Pay&logoColor=white)',
      badge: 'Samsung Pay'
    },
    {
      name: '![Wise](https://img.shields.io/badge/wise-394e79?style=for-the-badge&logo=transferwise&logoColor=00B9FF)',
      badge: 'TransferWise / Wise'
    },
    {
      name: '![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)',
      badge: '.NET'
    },
    {
      name: '![AdonisJS](https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white)',
      badge: 'AdonisJS'
    },
    {
      name: '![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white)',
      badge: 'Anaconda'
    },
    {
      name: '![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)',
      badge: 'Angular'
    },
    {
      name: '![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)',
      badge: 'Angular.js'
    },
    {
      name: '![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)',
      badge: 'Ant Design'
    },
    {
      name: '![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)',
      badge: 'Apache Kafka'
    },
    {
      name: '![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)',
      badge: 'Apollo-GraphQL'
    },
    {
      name: '![Aurelia](https://img.shields.io/badge/aurelia-%23ED2B88.svg?style=for-the-badge&logo=aurelia&logoColor=fff)',
      badge: 'Aurelia'
    },
    {
      name: '![Blazor](https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white)',
      badge: 'Blazor'
    },
    {
      name: '![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',
      badge: 'Bootstrap'
    },
    {
      name: '![Buefy](https://img.shields.io/badge/Buefy-7957D5?style=for-the-badge&logo=buefy&logoColor=48289E)',
      badge: 'Buefy'
    },
    {
      name: '![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)',
      badge: 'Chakra'
    },
    {
      name: '![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)',
      badge: 'Chart.js'
    },
    {
      name: '![Code-Igniter](https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white)',
      badge: 'Code Igniter'
    },
    {
      name: '![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white)',
      badge: 'Directus'
    },
    {
      name: '![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)',
      badge: 'Django'
    },
    {
      name: '![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)',
      badge: 'DjangoREST'
    },
    {
      name: '![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)',
      badge: 'Electron.js'
    },
    {
      name: '![Ember](https://img.shields.io/badge/ember-1C1E24?style=for-the-badge&logo=ember.js&logoColor=#D04A37)',
      badge: 'Ember'
    },
    {
      name: '![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)',
      badge: 'Expo'
    },
    {
      name: '![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)',
      badge: 'Express.js'
    },
    {
      name: '![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)',
      badge: 'FastAPI'
    },
    {
      name: '![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)',
      badge: 'Fastify'
    },
    {
      name: '![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)',
      badge: 'Flask'
    },
    {
      name: '![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)',
      badge: 'Flutter'
    },
    {
      name: '![Gatsby](https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white)',
      badge: 'Gatsby.js'
    },
    {
      name: '![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)',
      badge: 'Green Sock'
    },
    {
      name: '![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)',
      badge: 'Gulp'
    },
    {
      name: '![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)',
      badge: 'Insomnia'
    },
    {
      name: '![Jasmine](https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white)',
      badge: 'Jasmine'
    },
    {
      name: '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)',
      badge: 'jQuery'
    },
    {
      name: '![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)',
      badge: 'JWT/JSON Web Token'
    },
    {
      name: '![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)',
      badge: 'Laravel'
    },
    {
      name: '![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)',
      badge: 'Less'
    },
    {
      name: '![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)',
      badge: 'MUI'
    },
    {
      name: '![Meteor JS](https://img.shields.io/badge/meteorjs-%23d74c4c.svg?style=for-the-badge&logo=meteor&logoColor=white)',
      badge: 'Meteor JS'
    },
    {
      name: '![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)',
      badge: 'NPM'
    },
    {
      name: '![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)',
      badge: 'NestJS'
    },
    {
      name: '![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)',
      badge: 'Next JS'
    },
    {
      name: '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',
      badge: 'Node.js'
    },
    {
      name: '![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)',
      badge: 'Nuxt JS'
    },
    {
      name: '![Nx](https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white)',
      badge: 'Nx'
    },
    {
      name: '![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)',
      badge: 'OpenCV'
    },
    {
      name: '![OpenGL](https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=for-the-badge&logo=opengl)',
      badge: 'OpenGL'
    },
    {
      name: '![P5js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=FFFFFF)',
      badge: 'P5js'
    },
    {
      name: '![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)',
      badge: 'Pug'
    },
    {
      name: '![Qt](https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white)',
      badge: 'Qt'
    },
    {
      name: '![Quasar](https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black)',
      badge: 'Quasar'
    },
    {
      name: '![ROS](https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white)',
      badge: 'ROS'
    },
    {
      name: '![RabbitMQ](https://img.shields.io/badge/rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)',
      badge: 'RabbitMQ'
    },
    {
      name: '![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)',
      badge: 'Rails'
    },
    {
      name: '![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)',
      badge: 'React'
    },
    {
      name: '![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)',
      badge: 'React Native'
    },
    {
      name: '![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)',
      badge: 'React Query'
    },
    {
      name: '![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)',
      badge: 'React Router'
    },
    {
      name: '![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)',
      badge: 'Redux'
    },
    {
      name: '![RxDB](https://img.shields.io/badge/rxdb-%238D1F89.svg?style=for-the-badge&logo=rxdb&logoColor=white)',
      badge: 'RxDB'
    },
    {
      name: '![RxDB](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)',
      badge: 'RxJs'
    },
    {
      name: '![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)',
      badge: 'RxJS'
    },
    {
      name: '![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)',
      badge: 'SASS'
    },
    {
      name: '![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)',
      badge: 'Semantic UI React'
    },
    {
      name: '![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)',
      badge: 'Socket.io'
    },
    {
      name: '![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)',
      badge: 'Spring'
    },
    {
      name: '![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)',
      badge: 'Strapi'
    },
    {
      name: '![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)',
      badge: 'Styled Components'
    },
    {
      name: '![Stylus](https://img.shields.io/badge/stylus-%23ff6347.svg?style=for-the-badge&logo=stylus&logoColor=white)',
      badge: 'Stylus'
    },
    {
      name: '![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)',
      badge: 'Svelte'
    },
    {
      name: '![Symfony](https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white)',
      badge: 'Symfony'
    },
    {
      name: '![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)',
      badge: 'TailwindCSS'
    },
    {
      name: '![Three js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)',
      badge: 'Three.js'
    },
    {
      name: '![Thymeleaf](https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white)',
      badge: 'Thymeleaf'
    },
    {
      name: '![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge)',
      badge: 'TypeGraphQL'
    },
    {
      name: '![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)',
      badge: 'Vue.js'
    },
    {
      name: '![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)',
      badge: 'Vuetify'
    },
    {
      name: '![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)',
      badge: 'Webpack'
    },
    {
      name: '![Windicss](https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white)',
      badge: 'WindiCSS'
    },
    {
      name: '![Xamarin](https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&logo=xamarin&logoColor=white)',
      badge: 'Xamarin'
    },
    {
      name: '![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)',
      badge: 'Yarn'
    },
    {
      name: '![Analogue](https://img.shields.io/badge/Analogue-1A1A1A?style=for-the-badge&logo=Analogue&logoColor=white)',
      badge: 'Analogue'
    },
    {
      name: '![Battle.net](https://img.shields.io/badge/battle.net-%2300AEFF.svg?style=for-the-badge&logo=battle.net&logoColor=white)',
      badge: 'Battle.net'
    },
    {
      name: '![EA](https://img.shields.io/badge/ea-%23000000.svg?style=for-the-badge&logo=ea&logoColor=white)',
      badge: 'EA'
    },
    {
      name: '![Epic Games](https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white)',
      badge: 'Epic Games'
    },
    {
      name: '![Godot Engine](https://img.shields.io/badge/GODOT-%23FFFFFF.svg?style=for-the-badge&logo=godot-engine)',
      badge: 'Godot Engine'
    },
    {
      name: '![Humble Bundle](https://img.shields.io/badge/HumbleBundle-%23494F5C.svg?style=for-the-badge&logo=HumbleBundle&logoColor=white)',
      badge: 'Humble Bundle'
    },
    {
      name: '![Itch.io](https://img.shields.io/badge/Itch-%23FF0B34.svg?style=for-the-badge&logo=Itch.io&logoColor=white)',
      badge: 'Itch.io'
    },
    {
      name: '![nVIDIA](https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white)',
      badge: 'nVIDIA'
    },
    {
      name: '![PlayStation Network](https://img.shields.io/badge/PSN-%230070D1.svg?style=for-the-badge&logo=Playstation&logoColor=white)',
      badge: 'PlayStation Network'
    },
    {
      name: '![Square Enix](https://img.shields.io/badge/SquareEnix-%23ED1C24.svg?style=for-the-badge&logo=SquareEnix&logoColor=white)',
      badge: 'Riot Games'
    },
    {
      name: '![Steam](https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white)',
      badge: 'Steam'
    },
    {
      name: '![Ubisoft](https://img.shields.io/badge/Ubisoft-%23F5F5F5.svg?style=for-the-badge&logo=Ubisoft&logoColor=black)',
      badge: 'Ubisoft'
    },
    {
      name: '![Unity](https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white)',
      badge: 'Unity'
    },
    {
      name: '![Unreal Engine](https://img.shields.io/badge/unrealengine-%23313131.svg?style=for-the-badge&logo=unrealengine&logoColor=white)',
      badge: 'Unreal Engine'
    },
    {
      name: '![Xbox](https://img.shields.io/badge/xbox-%23107C10.svg?style=for-the-badge&logo=xbox&logoColor=white)',
      badge: 'Xbox'
    },
    {
      name: '![3DS](https://img.shields.io/badge/3DS-D12228?style=for-the-badge&logo=nintendo-3ds&logoColor=white)',
      badge: '3DS'
    },
    {
      name: '![Gamecube](https://img.shields.io/badge/Gamecube-6A5FBB?style=for-the-badge&logo=nintendo-gamecube&logoColor=white)',
      badge: 'Gamecube'
    },
    {
      name: '![Playstation](https://img.shields.io/badge/Playstation-003791?style=for-the-badge&logo=playstation&logoColor=white)',
      badge: 'Playstation'
    },
    {
      name: '![Playstation 2](https://img.shields.io/badge/Playstation%202-003791?style=for-the-badge&logo=playstation-2&logoColor=white)',
      badge: 'Playstation 2'
    },
    {
      name: '![Playstation 3](https://img.shields.io/badge/Playstation%203-003791?style=for-the-badge&logo=playstation-3&logoColor=white)',
      badge: 'Playstation 3'
    },
    {
      name: '![Playstation 4](https://img.shields.io/badge/Playstation%204-003791?style=for-the-badge&logo=playstation-4&logoColor=white)',
      badge: 'Playstation 4'
    },
    {
      name: '![Playstation 5](https://img.shields.io/badge/Playstation%205-003791?style=for-the-badge&logo=playstation-5&logoColor=white)',
      badge: 'Playstation 5'
    },
    {
      name: '![Playstation Vita](https://img.shields.io/badge/Playstation%20Vita-003791?style=for-the-badge&logo=playstation-vita&logoColor=white)',
      badge: 'Playstation Vita'
    },
    {
      name: '![Switch](https://img.shields.io/badge/Switch-E60012?style=for-the-badge&logo=nintendo-switch&logoColor=white)',
      badge: 'Switch'
    },
    {
      name: '![Wii](https://img.shields.io/badge/Wii-8B8B8B?style=for-the-badge&logo=wii&logoColor=white)',
      badge: 'Wii'
    },
    {
      name: '![Wii U](https://img.shields.io/badge/Wii%20U-8B8B8B?style=for-the-badge&logo=wiiu&logoColor=white)',
      badge: 'Wii U'
    },
    {
      name: '![Xbox](https://img.shields.io/badge/xbox-%23107C10.svg?style=for-the-badge&logo=xbox&logoColor=white)',
      badge: 'Xbox'
    },
    {
      name: '![Alibaba Cloud](https://img.shields.io/badge/AlibabaCloud-%23FF6701.svg?style=for-the-badge&logo=alibabacloud&logoColor=white)',
      badge: 'Alibaba Cloud'
    },
    {
      name: '![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)',
      badge: 'AWS'
    },
    {
      name: '![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)',
      badge: 'Azure'
    },
    {
      name: '![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)',
      badge: 'Cloudflare'
    },
    {
      name: '![Codeberg](https://img.shields.io/badge/Codeberg-2185D0?style=for-the-badge&logo=Codeberg&logoColor=white)',
      badge: 'Codeberg'
    },
    {
      name: '![Datadog](https://img.shields.io/badge/datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white)',
      badge: 'Datadog'
    },
    {
      name: '![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)',
      badge: 'DigitalOcean'
    },
    {
      name: '![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)',
      badge: 'Firebase'
    },
    {
      name: '![Glitch](https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white)',
      badge: 'Glitch'
    },
    {
      name: '![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)',
      badge: 'Google Cloud'
    },
    {
      name: '![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)',
      badge: 'Heroku'
    },
    {
      name: '![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)',
      badge: 'Netlify'
    },
    {
      name: '![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)',
      badge: 'Oracle'
    },
    {
      name: '![OpenStack](https://img.shields.io/badge/Openstack-%23f01742.svg?style=for-the-badge&logo=openstack&logoColor=white)',
      badge: 'OpenStack'
    },
    {
      name: '![OVH](https://img.shields.io/badge/ovh-%23123F6D.svg?style=for-the-badge&logo=ovh&logoColor=#123F6D)',
      badge: 'OVH'
    },
    {
      name: '![Scaleway](https://img.shields.io/badge/SCALEWAY-%234f0599.svg?style=for-the-badge&logo=scaleway&logoColor=white)',
      badge: 'Scaleway'
    },
    {
      name: '![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)',
      badge: 'Vercel'
    },
    {
      name: '![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white)',
      badge: 'Android Studio'
    },
    {
      name: '![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)',
      badge: 'Atom'
    },
    {
      name: '![CLion](https://img.shields.io/badge/CLion-black?style=for-the-badge&logo=clion&logoColor=white)',
      badge: 'CLion'
    },
    {
      name: '![CodePen](https://img.shields.io/badge/CodePen-white?style=for-the-badge&logo=codepen&logoColor=black)',
      badge: 'CodePen'
    },
    {
      name: '![CodeSandbox](https://img.shields.io/badge/Codesandbox-040404?style=for-the-badge&logo=codesandbox&logoColor=DBDBDB)',
      badge: 'CodeSandbox'
    },
    {
      name: '![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)',
      badge: 'Eclipse'
    },
    {
      name: '![Emacs](https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=for-the-badge&logo=gnu-emacs&logoColor=white)',
      badge: 'Emacs'
    },
    {
      name: '![GoLand](https://img.shields.io/badge/GoLand-0f0f0f?&style=for-the-badge&logo=goland&logoColor=white)',
      badge: 'GoLand'
    },
    {
      name: '![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)',
      badge: 'IntelliJ IDEA'
    },
    {
      name: '![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)',
      badge: 'Jupyter Notebook'
    },
    {
      name: '![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)',
      badge: 'Neovim'
    },
    {
      name: '![NetBeans IDE](https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white)',
      badge: 'NetBeans IDE'
    },
    {
      name: '![PhpStorm](https://img.shields.io/badge/phpstorm-143?style=for-the-badge&logo=phpstorm&logoColor=black&color=black&labelColor=darkorchid)',
      badge: 'PhpStorm'
    },
    {
      name: '![PyCharm](https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green)',
      badge: 'PyCharm'
    },
    {
      name: '![Replit](https://img.shields.io/badge/Replit-DD1200?style=for-the-badge&logo=Replit&logoColor=white)',
      badge: 'Replit'
    },
    {
      name: '![Rider](https://img.shields.io/badge/Rider-000000.svg?style=for-the-badge&logo=Rider&logoColor=white&color=black&labelColor=crimson)',
      badge: 'Rider'
    },
    {
      name: '![Spyder](https://img.shields.io/badge/Spyder-838485?style=for-the-badge&logo=spyder%20ide&logoColor=maroon)',
      badge: 'Spyder'
    },
    {
      name: '![Sublime Text](https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important)',
      badge: 'Sublime Text'
    },
    {
      name: '![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white)',
      badge: 'Vim'
    },
    {
      name: '![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)',
      badge: 'Visual Studio Code'
    },
    {
      name: '![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)',
      badge: 'Visual Studio'
    },
    {
      name: '![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)',
      badge: 'WebStorm'
    },
    {
      name: '![Xcode](https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white)',
      badge: 'Xcode'
    },
    {
      name: '![Zend](https://img.shields.io/badge/Zend-fff?style=for-the-badge&logo=zend&logoColor=0679EA)',
      badge: 'Zend'
    },
    {
      name: '![Apache Groovy](https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white)',
      badge: 'Apache Groovy'
    },
    {
      name: '![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)',
      badge: 'C'
    },
    {
      name: '![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)',
      badge: 'C#'
    },
    {
      name: '![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)',
      badge: 'C++'
    },
    {
      name: '![Crystal](https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white)',
      badge: 'Crystal'
    },
    {
      name: '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
      badge: 'CSS3'
    },
    {
      name: '![Clojure](https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure)',
      badge: 'Clojure'
    },
    {
      name: '![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)',
      badge: 'Dart'
    },
    {
      name: '![Elixir](https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white)',
      badge: 'Elixir'
    },
    {
      name: '![Elm](https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white)',
      badge: 'Elm'
    },
    {
      name: '![Erlang](https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533)',
      badge: 'Erlang'
    },
    {
      name: '![Fortran](https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white)',
      badge: 'Fortran'
    },
    {
      name: '![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)',
      badge: 'Go/Golang'
    },
    {
      name: '![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)',
      badge: 'GraphQL'
    },
    {
      name: '![Haskell](https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white)',
      badge: 'Haskell'
    },
    {
      name: '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
      badge: 'HTML5'
    },
    {
      name: '![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)',
      badge: 'Java'
    },
    {
      name: '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
      badge: 'JavaScript'
    },
    {
      name: '![Julia](https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white)',
      badge: 'Julia'
    },
    {
      name: '![Kotlin](https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white)',
      badge: 'Kotlin'
    },
    {
      name: '![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)',
      badge: 'LaTeX'
    },
    {
      name: '![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)',
      badge: 'Lua'
    },
    {
      name: '![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)',
      badge: 'Markdown'
    },
    {
      name: '![Nim](https://img.shields.io/badge/nim-%23FFE953.svg?style=for-the-badge&logo=nim&logoColor=white)',
      badge: 'Nim'
    },
    {
      name: '![Octave](https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683)',
      badge: 'Octave'
    },
    {
      name: '![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)',
      badge: 'PHP'
    },
    {
      name: '![Perl](https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white)',
      badge: 'Perl'
    },
    {
      name: '![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)',
      badge: 'Python'
    },
    {
      name: '![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)',
      badge: 'R'
    },
    {
      name: '![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)',
      badge: 'Ruby'
    },
    {
      name: '![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)',
      badge: 'Rust'
    },
    {
      name: '![Scala](https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white)',
      badge: 'Scala'
    },
    {
      name: '![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)',
      badge: 'Shell Script'
    },
    {
      name: '![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)',
      badge: 'Solidity'
    },
    {
      name: '![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)',
      badge: 'Swift'
    },
    {
      name: '![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)',
      badge: 'TypeScript'
    },
    {
      name: '![Zig](https://img.shields.io/badge/Zig-%23F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white)',
      badge: 'Zig'
    },
    {
      name: '![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)',
      badge: 'Keras'
    },
    {
      name: '![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)',
      badge: 'NumPy'
    },
    {
      name: '![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)',
      badge: 'Pandas'
    },
    {
      name: '![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white)',
      badge: 'Plotly'
    },
    {
      name: '![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)',
      badge: 'PyTorch'
    },
    {
      name: '![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)',
      badge: 'scikit-learn'
    },
    {
      name: '![Scipy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white)',
      badge: 'SciPy'
    },
    {
      name: '![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)',
      badge: 'TensorFlow'
    },
    {
      name: '![Apple Music](https://img.shields.io/badge/Apple_Music-9933CC?style=for-the-badge&logo=apple-music&logoColor=white)',
      badge: 'Apple Music'
    },
    {
      name: '![Audacity](https://img.shields.io/badge/Audacity-0000CC?style=for-the-badge&logo=audacity&logoColor=white)',
      badge: 'Audacity'
    },
    {
      name: '![Deezer](https://img.shields.io/badge/Deezer-FEAA2D?style=for-the-badge&logo=deezer&logoColor=white)',
      badge: 'Deezer'
    },
    {
      name: '![Sound Cloud](https://img.shields.io/badge/sound%20cloud-FF5500?style=for-the-badge&logo=soundcloud&logoColor=white)',
      badge: 'Sound Cloud'
    },
    {
      name: '![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)',
      badge: 'Spotify'
    },
    {
      name: '![Shazam](https://img.shields.io/badge/shazam-1476FE?style=for-the-badge&logo=shazam&logoColor=white)',
      badge: 'Shazam'
    },
    {
      name: '![Tidal](https://img.shields.io/badge/tidal-00FFFF?style=for-the-badge&logo=tidal&logoColor=black)',
      badge: 'Tidal'
    },
    {
      name: '![YouTube Music](https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white)',
      badge: 'YouTube Music'
    },
    {
      name: '![Microsoft](https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)',
      badge: 'Microsoft'
    },
    {
      name: '![Microsoft Access](https://img.shields.io/badge/Microsoft_Access-A4373A?style=for-the-badge&logo=microsoft-access&logoColor=white)',
      badge: 'Microsoft Access'
    },
    {
      name: '![Microsoft Excel](https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white)',
      badge: 'Microsoft Excel'
    },
    {
      name: '![Microsoft Office](https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white)',
      badge: 'Microsoft Office'
    },
    {
      name: '![Microsoft PowerPoint](https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=for-the-badge&logo=microsoft-powerpoint&logoColor=white)',
      badge: 'Microsoft PowerPoint'
    },
    {
      name: '![Microsoft SharePoint ](https://img.shields.io/badge/Microsoft_SharePoint-0078D4?style=for-the-badge&logo=microsoft-sharepoint&logoColor=white)',
      badge: 'Microsoft SharePoint'
    },
    {
      name: '![Microsoft Visio ](https://img.shields.io/badge/Microsoft_Visio-3955A3?style=for-the-badge&logo=microsoft-visio&logoColor=white)',
      badge: 'Microsoft Visio'
    },
    {
      name: '![Microsoft Word](https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white)',
      badge: 'Microsoft Word'
    },
    {
      name: '![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white)',
      badge: 'Alpine Linux'
    },
    {
      name: '![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)',
      badge: 'Android'
    },
    {
      name: '![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge)',
      badge: 'Arch'
    },
    {
      name: '![Chrome OS](https://img.shields.io/badge/chrome%20os-3d89fc?style=for-the-badge&logo=google%20chrome&logoColor=white)',
      badge: 'Cent OS'
    },
    {
      name: '![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)',
      badge: 'Debian'
    },
    {
      name: '![Deepin](https://img.shields.io/badge/Deepin-007CFF?style=for-the-badge&logo=deepin&logoColor=white)',
      badge: 'Deepin'
    },
    {
      name: '![Elementary OS](https://img.shields.io/badge/-elementary%20OS-black?style=for-the-badge&logo=elementary&logoColor=white)',
      badge: 'Elementary OS'
    },
    {
      name: '![Fedora](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)',
      badge: 'Fedora'
    },
    {
      name: '![FreeBSD](https://img.shields.io/badge/-FreeBSD-%23870000?style=for-the-badge&logo=freebsd&logoColor=white)',
      badge: 'FreeBSD'
    },
    {
      name: '![IOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)',
      badge: 'IOS'
    },
    {
      name: '![Kali](https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white)',
      badge: 'Kali'
    },
    {
      name: '![Kubuntu](https://img.shields.io/badge/-KUbuntu-%230079C1?style=for-the-badge&logo=kubuntu&logoColor=white)',
      badge: 'Kubuntu'
    },
    {
      name: '![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)',
      badge: 'Linux'
    },
    {
      name: '![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)',
      badge: 'Linux Mint'
    },
    {
      name: '![Lubuntu](https://img.shields.io/badge/-Lubuntu-%230065C2?style=for-the-badge&logo=lubuntu&logoColor=white)',
      badge: 'Lubuntu'
    },
    {
      name: '![Lineageos](https://img.shields.io/badge/lineageos-167C80?style=for-the-badge&logo=lineageos&logoColor=white)',
      badge: 'Lineageos'
    },
    {
      name: '![Manjaro](https://img.shields.io/badge/Manjaro-35BF5C?style=for-the-badge&logo=Manjaro&logoColor=white)',
      badge: 'Manjaro'
    },
    {
      name: '![MX Linux](https://img.shields.io/badge/-MX%20Linux-%23000000?style=for-the-badge&logo=MXlinux&logoColor=white)',
      badge: 'MX Linux'
    },
    {
      name: '![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)',
      badge: 'Mac Os'
    },
    {
      name: '![Openwrt](https://img.shields.io/badge/OpenWrt-00B5E2?style=for-the-badge&logo=OpenWrt&logoColor=white)',
      badge: 'Openwrt'
    },
    {
      name: '![OpenBSD](https://img.shields.io/badge/-OpenBSD-%23FCC771?style=for-the-badge&logo=openbsd&logoColor=black)',
      badge: 'OpenBSD'
    },
    {
      name: '![Red Hat](https://img.shields.io/badge/Red%20Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white)',
      badge: 'Red Hat'
    },
    {
      name: '![Rocky Linux](https://img.shields.io/badge/-Rocky%20Linux-%2310B981?style=for-the-badge&logo=rockylinux&logoColor=white)',
      badge: 'Rocky Linux'
    },
    {
      name: '![Suse](https://img.shields.io/badge/SUSE-0C322C?style=for-the-badge&logo=SUSE&logoColor=white)',
      badge: 'Suse'
    },
    {
      name: '![Slackware](https://img.shields.io/badge/-Slackware-%231357BD?style=for-the-badge&logo=slackware&logoColor=white)',
      badge: 'Slackware'
    },
    {
      name: '![Tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)',
      badge: 'Tails'
    },
    {
      name: '![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)',
      badge: 'Ubuntu'
    },
    {
      name: '![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)',
      badge: 'Windows'
    },
    {
      name: '![Windows 95](https://img.shields.io/badge/Windows%2095-008484?style=for-the-badge&logo=windows95&logoColor=white)',
      badge: 'Windows 95'
    },
    {
      name: '![Windows XP](https://img.shields.io/badge/Windows%20xp-003399?style=for-the-badge&logo=windowsxp&logoColor=white)',
      badge: 'Windows XP'
    },
    {
      name: '![Zorin OS](https://img.shields.io/badge/-Zorin%20OS-%2310AAEB?style=for-the-badge&logo=zorin&logoColor=white)',
      badge: 'Zorin OS'
    },
    {
      name: '![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)',
      badge: 'Prisma'
    },
    {
      name: '![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)',
      badge: 'Sequelize'
    },
    {
      name: '![Alfred](https://img.shields.io/badge/alfred-%235C1F87.svg?style=for-the-badge&logo=alfred)',
      badge: 'Alfred'
    },
    {
      name: '![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white)',
      badge: 'Ansible'
    },
    {
      name: '![AquaSec](https://img.shields.io/badge/aqua-%231904DA.svg?style=for-the-badge&logo=aqua&logoColor=#0018A8)',
      badge: 'Aqua Sec'
    },
    {
      name: '![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)',
      badge: 'Arduino'
    },
    {
      name: '![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)',
      badge: 'Babel'
    },
    {
      name: '![CMake](https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white)',
      badge: 'CMake'
    },
    {
      name: '![CodeCov](https://img.shields.io/badge/codecov-%23ff0077.svg?style=for-the-badge&logo=codecov&logoColor=white)',
      badge: 'CodeCov'
    },
    {
      name: '![Confluence](https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white)',
      badge: 'Confluence'
    },
    {
      name: '![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)',
      badge: 'Docker'
    },
    {
      name: '![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)',
      badge: 'ESLint'
    },
    {
      name: '![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)',
      badge: 'ElasticSearch'
    },
    {
      name: '![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white)',
      badge: 'Gradle'
    },
    {
      name: '![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)',
      badge: 'Jira'
    },
    {
      name: '![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)',
      badge: 'Kubernetes'
    },
    {
      name: '![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)',
      badge: 'Notion'
    },
    {
      name: '![Packer](https://img.shields.io/badge/packer-%23E7EEF0.svg?style=for-the-badge&logo=packer&logoColor=%2302A8EF)',
      badge: 'Packer'
    },
    {
      name: '![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)',
      badge: 'Portfolio'
    },
    {
      name: '![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)',
      badge: 'Postman'
    },
    {
      name: '![Prezi](https://img.shields.io/badge/Prezi-%23000000.svg?style=for-the-badge&logo=Prezi&logoColor=white)',
      badge: 'Prezi'
    },
    {
      name: '![Rancher](https://img.shields.io/badge/rancher-%230075A8.svg?style=for-the-badge&logo=rancher&logoColor=white)',
      badge: 'Rancher'
    },
    {
      name: '![Raspberry Pi](https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi)',
      badge: 'Raspberry Pi'
    },
    {
      name: '![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)',
      badge: 'Swagger'
    },
    {
      name: '![TOR](https://img.shields.io/badge/tor-%237E4798.svg?style=for-the-badge&logo=tor-project&logoColor=white)',
      badge: 'TOR'
    },
    {
      name: '![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)',
      badge: 'Terraform'
    },
    {
      name: '![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)',
      badge: 'Trello'
    },
    {
      name: '![Uber](https://img.shields.io/badge/Uber-%23000000.svg?style=for-the-badge&logo=Uber&logoColor=white)',
      badge: 'Uber'
    },
    {
      name: '![Vagrant](https://img.shields.io/badge/vagrant-%231563FF.svg?style=for-the-badge&logo=vagrant&logoColor=white)',
      badge: 'Vagrant'
    },
    {
      name: '![XFCE](https://img.shields.io/badge/XFCE-%232284F2.svg?style=for-the-badge&logo=xfce&logoColor=white)',
      badge: 'XFCE'
    },
    {
      name: '![Qiskit](https://img.shields.io/badge/Qiskit-%236929C4.svg?style=for-the-badge&logo=Qiskit&logoColor=white)',
      badge: 'Qiskit'
    },
    {
      name: '![Baidu](https://img.shields.io/badge/Baidu-2932E1?style=for-the-badge&logo=Baidu&logoColor=white)',
      badge: 'Baidu'
    },
    {
      name: '![Bing](https://img.shields.io/badge/Microsoft%20Bing-258FFA?style=for-the-badge&logo=Microsoft%20Bing&logoColor=white)',
      badge: 'Bing'
    },
    {
      name: '![DuckDuckGo](https://img.shields.io/badge/DuckDuckGo-DE5833?style=for-the-badge&logo=DuckDuckGo&logoColor=white)',
      badge: 'DuckDuckGo'
    },
    {
      name: '![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)',
      badge: 'Google'
    },
    {
      name: '![Yahoo!](https://img.shields.io/badge/Yahoo!-6001D2?style=for-the-badge&logo=Yahoo!&logoColor=white)',
      badge: 'Yahoo!'
    },
    {
      name: '![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)',
      badge: 'Apache'
    },
    {
      name: '![Gunicorn](https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white)',
      badge: 'Gunicorn'
    },
    {
      name: '![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)',
      badge: 'Jenkins'
    },
    {
      name: '![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)',
      badge: 'Nginx'
    },
    {
      name: '![Airtable](https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white)',
      badge: 'Airtable'
    },
    {
      name: '![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)',
      badge: 'Discord'
    },
    {
      name: '![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)',
      badge: 'Facebook'
    },
    {
      name: '![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)',
      badge: 'Gmail'
    },
    {
      name: '![Google Meet](https://img.shields.io/badge/Google%20Meet-00897B?style=for-the-badge&logo=google-meet&logoColor=white)',
      badge: 'Google Meet'
    },
    {
      name: '![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)',
      badge: 'Instagram'
    },
    {
      name: '![KakaoTalk](https://img.shields.io/badge/kakaotalk-ffcd00.svg?style=for-the-badge&logo=kakaotalk&logoColor=000000)',
      badge: 'KakaoTalk'
    },
    {
      name: '![Line](https://img.shields.io/badge/Line-00C300?style=for-the-badge&logo=line&logoColor=white)',
      badge: 'Line'
    },
    {
      name: '![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)',
      badge: 'LinkedIn'
    },
    {
      name: '![Linktree](https://img.shields.io/badge/linktree-1de9b6?style=for-the-badge&logo=linktree&logoColor=white)',
      badge: 'Linktree'
    },
    {
      name: '![Meetup](https://img.shields.io/badge/Meetup-f64363?style=for-the-badge&logo=meetup&logoColor=white)',
      badge: 'Meetup'
    },
    {
      name: '![Messenger](https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white)',
      badge: 'Messenger'
    },
    {
      name: '![Mastodon](https://img.shields.io/badge/-MASTODON-%232B90D9?style=for-the-badge&logo=mastodon&logoColor=white)',
      badge: 'Mastodon'
    },
    {
      name: '![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)',
      badge: 'Outlook'
    },
    {
      name: '![Odysee](https://img.shields.io/badge/odysee-EF1970?style=for-the-badge&logo=Odysee&logoColor=white)',
      badge: 'Odysee'
    },
    {
      name: '![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?style=for-the-badge&logo=Pinterest&logoColor=white)',
      badge: 'Pinterest'
    },
    {
      name: '![Protonmail](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)',
      badge: 'Protonmail'
    },
    {
      name: '![Polywork](https://img.shields.io/badge/Polywork-543DE0?style=for-the-badge&logo=polywork&logoColor=black)',
      badge: 'Polywork'
    },
    {
      name: '![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)',
      badge: 'Reddit'
    },
    {
      name: '![Signal](https://img.shields.io/badge/Signal-%23039BE5.svg?style=for-the-badge&logo=Signal&logoColor=white)',
      badge: 'Signal'
    },
    {
      name: '![Skype](https://img.shields.io/badge/Skype-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white)',
      badge: 'Skype'
    },
    {
      name: '![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)',
      badge: 'Slack'
    },
    {
      name: '![Snapchat](https://img.shields.io/badge/Snapchat-%23FFFC00.svg?style=for-the-badge&logo=Snapchat&logoColor=white)',
      badge: 'Snapchat'
    },
    {
      name: '![TeamSpeak](https://img.shields.io/badge/TeamSpeak-2580C3?style=for-the-badge&logo=teamspeak&logoColor=white)',
      badge: 'TeamSpeak'
    },
    {
      name: '![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)',
      badge: 'Telegram'
    },
    {
      name: '![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white)',
      badge: 'TikTok'
    },
    {
      name: '![Tumblr](https://img.shields.io/badge/Tumblr-%2336465D.svg?style=for-the-badge&logo=Tumblr&logoColor=white)',
      badge: 'Tumblr'
    },
    {
      name: '![Tutanota](https://img.shields.io/badge/Tutanota-840010?style=for-the-badge&logo=Tutanota&logoColor=white)',
      badge: 'Tutanota'
    },
    {
      name: '![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white)',
      badge: 'Twitch'
    },
    {
      name: '![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)',
      badge: 'Twitter'
    },
    {
      name: '![Viber](https://img.shields.io/badge/Viber-8B66A9?style=for-the-badge&logo=viber&logoColor=white)',
      badge: 'Viber'
    },
    {
      name: '![WeChat](https://img.shields.io/badge/WeChat-07C160?style=for-the-badge&logo=wechat&logoColor=white)',
      badge: 'WeChat'
    },
    {
      name: '![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)',
      badge: 'WhatsApp'
    },
    {
      name: '![Wire](https://img.shields.io/badge/Wire-B71C1C?style=for-the-badge&logo=wire&logoColor=white)',
      badge: 'Wire'
    },
    {
      name: '![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white)',
      badge: 'WordPress'
    },
    {
      name: '![Xbox](https://img.shields.io/badge/Xbox-%23107C10.svg?style=for-the-badge&logo=Xbox&logoColor=white)',
      badge: 'Xbox'
    },
    {
      name: '![XING](https://img.shields.io/badge/xing-%23006567.svg?style=for-the-badge&logo=xing&logoColor=white)',
      badge: 'XING'
    },
    {
      name: '![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)',
      badge: 'YouTube'
    },
    {
      name: '![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)',
      badge: 'Zoom'
    },
    {
      name: '![Apple](https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white)',
      badge: 'Apple'
    },
    {
      name: '![ASUS](https://img.shields.io/badge/asus-000080.svg?style=for-the-badge&logo=asus&logoColor=white)',
      badge: 'ASUS'
    },
    {
      name: '![BlackBerry](https://img.shields.io/badge/blackberry-808080.svg?style=for-the-badge&logo=blackberry&logoColor=white)',
      badge: 'BlackBerry'
    },
    {
      name: '![Huawei](https://img.shields.io/badge/Huawei-%23FF0000.svg?style=for-the-badge&logo=huawei&logoColor=white)',
      badge: 'Huawei'
    },
    {
      name: '![Lenovo](https://img.shields.io/badge/lenovo-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)',
      badge: 'Lenovo'
    },
    {
      name: '![LG](https://img.shields.io/badge/lg-a50034.svg?style=for-the-badge&logo=lg&logoColor=white)',
      badge: 'LG'
    },
    {
      name: '![OnePlus](https://img.shields.io/badge/OnePlus-%23F5010C.svg?style=for-the-badge&logo=oneplus&logoColor=white)',
      badge: 'OnePlus'
    },
    {
      name: '![Motorola](https://img.shields.io/badge/Motorola-%23E1140A.svg?style=for-the-badge&logo=motorola&logoColor=white)',
      badge: 'Motorola'
    },
    {
      name: '![Nokia](https://img.shields.io/badge/Nokia-%23124191.svg?style=for-the-badge&logo=nokia&logoColor=white)',
      badge: 'Nokia'
    },
    {
      name: '![Samsung](https://img.shields.io/badge/Samsung-%231428A0.svg?style=for-the-badge&logo=samsung&logoColor=white)',
      badge: 'Samsung'
    },
    {
      name: '![Xiaomi](https://img.shields.io/badge/Xiaomi-%23FF6900.svg?style=for-the-badge&logo=xiaomi&logoColor=white)',
      badge: 'Xiaomi'
    },
    {
      name: '![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)',
      badge: 'App Store'
    },
    {
      name: '![F Droid](https://img.shields.io/badge/F_Droid-1976D2?style=for-the-badge&logo=f-droid&logoColor=white)',
      badge: 'F-Droid'
    },
    {
      name: '![Amazon Prime](https://img.shields.io/badge/Amazon%20Prime-0F79AF?style=for-the-badge&logo=amazonprime&logoColor=white)',
      badge: 'Play Store'
    },
    {
      name: '![Apple TV](https://img.shields.io/badge/Apple%20TV-000000?style=for-the-badge&logo=Apple%20TV&logoColor=white)',
      badge: 'Apple TV'
    },
    {
      name: '![Crunchroll](https://img.shields.io/badge/Crunchyroll-F47521?style=for-the-badge&logo=crunchyroll&logoColor=white)',
      badge: 'Crunchyroll'
    },
    {
      name: '![Facebook Gaming](https://img.shields.io/badge/Facebook%20Gaming-015BE5?style=for-the-badge&logo=facebookgaming&logoColor=white)',
      badge: 'Facebook Gaming'
    },
    {
      name: '![Facebook Live](https://img.shields.io/badge/Facebook%20Live-ED4242?style=for-the-badge&logo=Facebook%20Live&logoColor=white)',
      badge: 'Facebook Live'
    },
    {
      name: '![Hulu](https://img.shields.io/badge/hulu-1CE783?style=for-the-badge&logo=hulu&logoColor=white)',
      badge: 'Hulu'
    },
    {
      name: '![Netflix](https://img.shields.io/badge/Netflix-E50914?style=for-the-badge&logo=netflix&logoColor=white)',
      badge: 'Netflix'
    },
    {
      name: '![Twitch](https://img.shields.io/badge/Twitch-9347FF?style=for-the-badge&logo=twitch&logoColor=white)',
      badge: 'Twitch'
    },
    {
      name: '![Youtube Gaming](https://img.shields.io/badge/Youtube%20Gaming-FF0000?style=for-the-badge&logo=Youtubegaming&logoColor=white)',
      badge: 'Youtube Gaming'
    },
    {
      name: '![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)',
      badge: 'Cypress'
    },
    {
      name: '![Jasmine](https://img.shields.io/badge/-Jasmine-%238A4182?style=for-the-badge&logo=Jasmine&logoColor=white)',
      badge: 'Jasmine'
    },
    {
      name: '![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)',
      badge: 'Jest'
    },
    {
      name: '![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)',
      badge: 'Mocha'
    },
    {
      name: '![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)',
      badge: 'Selenium'
    },
    {
      name: '![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)',
      badge: 'Testing Library'
    },
    {
      name: '![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white)',
      badge: 'Bitbucket'
    },
    {
      name: '![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)',
      badge: 'Git'
    },
    {
      name: '![Gitea](https://img.shields.io/badge/Gitea-34495E?style=for-the-badge&logo=gitea&logoColor=5D9425)',
      badge: 'Gitea'
    },
    {
      name: '![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=for-the-badge&logo=gitee&logoColor=white)',
      badge: 'Gitee'
    },
    {
      name: '![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)',
      badge: 'GitHub'
    },
    {
      name: '![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)',
      badge: 'GitLab'
    },
    {
      name: '![Gitpod](https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white)',
      badge: 'Gitpod'
    },
    {
      name: '![Mercurial](https://img.shields.io/badge/mercurial-999999.svg?style=for-the-badge&logo=mercurial&logoColor=white)',
      badge: 'Mercurial'
    },
    {
      name: '![Perforce Helix](https://img.shields.io/badge/-PERFORCE%20HELIX-404040?style=for-the-badge&logo=Perforce&logoColor=white)',
      badge: 'Perforce Helix'
    },
    {
      name: '![AngelList](https://img.shields.io/badge/AngelList-%23D4D4D4.svg?style=for-the-badge&logo=AngelList&logoColor=black)',
      badge: 'AngelList'
    },
    {
      name: '![Behance](https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white)',
      badge: 'Behance'
    },
    {
      name: '![Freelancer](https://img.shields.io/badge/Freelancer-29B2FE?style=for-the-badge&logo=Freelancer&logoColor=white)',
      badge: 'Freelancer'
    },
    {
      name: '![HackerEarth](https://img.shields.io/badge/HackerEarth-%232C3454.svg?style=for-the-badge&logo=HackerEarth&logoColor=Blue)',
      badge: 'HackerEarth'
    },
    {
      name: '![HackerRank](https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white)',
      badge: 'HackerRank'
    },
    {
      name: '![Indeed](https://img.shields.io/badge/indeed-003A9B?style=for-the-badge&logo=indeed&logoColor=white)',
      badge: 'Indeed'
    },
    {
      name: '![Upwork](https://img.shields.io/badge/UpWork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white)',
      badge: 'Upwork'
    }
  ];


// function format(str) {
//     let arr = str.split("|");
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i -1] && arr[i]) {
//         arr2.push(arr[i].trim());
//         }
//     }
//     let arr3 = arr2.filter(function(el) {
//         if (el[0] !== '#' && el[0] !== '-' && el !== '' && el !== 'Name' && el !== 'Badge' && el !== 'Markdown' && el[1] !== '(') {
//             return el;
//         }
//         });
    
//         return arr3;
// }



// function keyValue(arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         // let obj = {
//         //     name: arr[i-1],
//         //     badge: arr[i],
//         // }
//         array.push({
//             name: arr[i-1],
//             badge: arr[i],
//         });
//     }
//     return array;
// }
function addLink(arr) {
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].badge;
        let badge = arr[i].name;
        arr[i].badge = badge;
        arr[i].name = name;

        let el = arr[i].badge;
        let partial = el.split('(');
        let link = partial[1].split(')');
        arr[i].link = link[0];
    }
    return arr;
}

let list = addLink(arr);

// function check(obj) {
//     let el = obj.name;
//     let link = el.split("(");
    
//     console.log(link[1].split(")"));
// }
// console.log(check({
//     name: '![Upwork](https://img.shields.io/badge/UpWork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white)'
// }));
console.dir(list, {'maxArrayLength': null});
