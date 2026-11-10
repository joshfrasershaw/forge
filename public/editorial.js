
/* Forgepath editorial, outcome-first page system */
const E={
photo:{workshop:"photo-1642796470393-4d62f7690485",build:"photo-1503387762-592deb58ef4e",heat:"photo-1581092160607-ee22621dd758",electric:"photo-1621905251189-08b45d6a269e",site:"photo-1504307651254-35680f356dfd",garden:"photo-1416879595882-3373a0480b5b",finish:"photo-1562259949-e8e7689d7828"},
picture(key){return img(this.photo[key]||key,1300)},
button(label="Start your project",href="/contact"){return '<a class="btn btn-red" href="'+href+'">'+label+' ↗</a>'},
hero(head,lead,photo="workshop"){return '<section class="forge-page-hero"><div class="shell forge-page-hero-inner"><div class="forge-page-hero-copy"><h1>'+head+'</h1><p>'+lead+'</p>'+this.button("Talk about your website")+'</div><div class="forge-page-hero-photo"><img src="'+this.picture(photo)+'" alt="Photography of real trades and workmanship"></div></div></section>'},
section(head,lead,body,warm=false){return '<section class="forge-section '+(warm?'forge-warm':'')+'"><div class="shell"><div class="forge-heading"><h2>'+head+'</h2><p>'+lead+'</p></div>'+body+'</div></section>'},
cards(items){return '<div class="forge-cards">'+items.map(x=>'<article><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join("")+'</div>'},
links(items){return '<div class="forge-links">'+items.map(x=>'<a href="'+x[2]+'"><h3>'+x[0]+'</h3><p>'+x[1]+'</p><span>Find out more ↗</span></a>').join("")+'</div>'},
split(head,body,photo="workshop"){return '<section class="forge-section"><div class="shell forge-split"><div class="forge-split-photo"><img loading="lazy" src="'+this.picture(photo)+'" alt="Trades and construction materials"></div><div class="forge-split-copy"><h2>'+head+'</h2>'+body+'</div></div></section>'},
cta(head,lead){return '<section class="forge-cta"><div class="shell"><h2>'+head+'</h2><p>'+lead+'</p>'+this.button()+'</div></section>'},
faqs(items){return '<div class="forge-faq">'+items.map(x=>'<details><summary>'+x[0]+'</summary><p>'+x[1]+'</p></details>').join("")+'</div>'},
proof:'<p class="forge-truth">Design concepts only. No invented client results, sales figures or testimonials.</p>'
};
const tradeCopy={
plumbers:{headline:"THE WEBSITE YOUR WORK DESERVES.",lead:"Your next boiler installation, heating upgrade or planned plumbing job starts with someone deciding whether your business looks worth trusting.",focus:"boiler installations, repairs, heating upgrades, servicing and planned plumbing",trust:"real installation photographs, valid Gas Safe details where applicable, manufacturer accreditations and genuine reviews",issue:"Someone pricing a new boiler should not need to wade through emergency call-out offers to find it.",photo:"heat"},
electricians:{headline:"MAKE YOUR WORK IMPOSSIBLE TO IGNORE.",lead:"Your next rewire, inspection or EV charger enquiry should land on a website that looks every bit as professional as the job you deliver.",focus:"rewires, EICRs, consumer units, EV chargers, lighting and commercial work",trust:"the qualifications and scheme registrations you actually hold, finished jobs and genuine customer feedback",issue:"Your customers need clear evidence of competence, not a wall of generic electrical jargon.",photo:"electric"},
roofers:{headline:"WIN TRUST BEFORE YOU CLIMB A LADDER.",lead:"Your next roof replacement is a serious decision for a homeowner. Give them the confidence to put their property in your hands.",focus:"new roofs, roof repairs, flat roofing, gutters and chimney work",trust:"genuine before-and-after photographs, relevant guarantees, insurance and local work",issue:"A homeowner spending thousands on a roof needs more than stock photographs and a vague promise of quality.",photo:"site"},
builders:{headline:"LOOK READY FOR BIGGER PROJECTS.",lead:"Your next extension, conversion or renovation is won on trust. Show your standards before customers ask you to quote.",focus:"extensions, conversions, renovations, structural work and bespoke projects",trust:"finished projects, your real team, authentic reviews and a clear approach to the job",issue:"A homeowner planning a serious renovation wants to see the work you can deliver, not a generic picture of a crane.",photo:"build"},
landscapers:{headline:"LET YOUR FINISHED WORK SELL THE NEXT JOB.",lead:"Your customers should be able to picture what their garden could become. Show them the kind of work they want to invest in.",focus:"patios, driveways, fencing, garden design, decking and landscaping",trust:"real before-and-after galleries, project details, genuine reviews and a simple quotation route",issue:"Your customers should quickly see whether you take on full transformations, small maintenance jobs or both.",photo:"garden"},
plasterers:{headline:"SHOW THEM THE FINISH THEY CAN EXPECT.",lead:"Your work is judged by the detail. Give customers a website that is just as clean, sharp and professional.",focus:"plastering, skimming, rendering, specialist finishes and decorating",trust:"photographs of real finishes, honest customer feedback and the areas you cover",issue:"Your work might be subtle, but the standard should still be obvious from your project photographs.",photo:"finish"}
};
home=function(){return '<section class="hero"><div class="hero-photo" role="img" aria-label="A real trades workshop"></div><div class="shell hero-inner"><div class="hero-content"><h1>BUILT FOR THE<br>PEOPLE WHO<br><span class="flag-type">BUILD BRITAIN.</span></h1><p class="hero-lead">You build your reputation on hard work. Get a website that earns your customers trust, shows what you do best and gives them a reason to call.</p><div class="action-row">'+E.button()+'<a class="hero-secondary" href="/work">See the work ↗</a><a class="hero-secondary" href="/pricing">See pricing ↗</a></div></div></div></section>'+
'<section class="forge-banner"><div class="shell"><strong>YOUR WORK DESERVES BETTER THAN AN ORDINARY WEBSITE.</strong><a href="/services">See what you get ↗</a></div></section>'+
E.section("LOOK THE PART.<br>WIN BETTER WORK.","Your customers form an opinion before they pick up the phone.",E.cards([
["LOOK ESTABLISHED","Make the first impression of your business as strong as your workmanship."],
["BUILD CONFIDENCE","Put your real work, relevant credentials and genuine reviews where customers will see them."],
["GET BETTER ENQUIRIES","Make your best services easy to understand and your quote request easy to find."]
]))+
E.section("YOUR TRADE.<br>YOUR REPUTATION.","Give customers a website that talks about the work they need.",'<div class="forge-trades">'+sectors.map(s=>'<a href="/sectors/'+s.slug+'"><img loading="lazy" src="'+img(s.image,700)+'" alt="Trade photography"><strong>'+s.short+'</strong><span>Explore ↗</span></a>').join("")+'</div>',true)+
E.section("YOUR WEBSITE HAS<br>ONE JOB.","Turn somebody looking into somebody who wants to contact your business.",E.cards([
["BE EASY TO FIND","Give search engines properly structured pages that explain your services and areas."],
["BE EASY TO TRUST","Show customers what you do, where you work and what makes you credible."],
["BE EASY TO CONTACT","Make calling and requesting a quote simple, especially on a phone."]
]))+
E.section("SEE THE STANDARD.","Explore design ideas for trades businesses. No made-up projects or inflated performance claims.",'<div class="forge-work-grid">'+projects.map((p,i)=>'<a href="/work/'+(i+1)+'"><img loading="lazy" src="'+img(p.image,900)+'" alt="Trade design concept"><h3>'+p.title+'</h3><p>'+p.intro+'</p><b>Explore concept ↗</b></a>').join("")+'</div>'+E.proof,true)+
E.split("YOUR REPUTATION.<br>ON FULL DISPLAY.",'<p>You have spent years getting good at what you do. Your customers should see that standard the moment they find your business.</p><p>Give them clear services, genuine examples of your work and an obvious way to get in touch.</p>'+E.button("Explore your options","/services"),"build")+
E.cta("YOUR NEXT CUSTOMER<br>IS LOOKING.","Make sure your business looks worth choosing when they find it.")};
services=function(){return E.hero("YOUR WEBSITE.<br>YOUR ADVANTAGE.","Your customers judge your business before they speak to you. Give them a website that works in your favour.","workshop")+
E.section("GET WHAT YOUR<br>BUSINESS NEEDS.","Not a list of technical tasks. Real advantages for your business.",E.links([
["WEBSITE DESIGN","Get a website your customers enjoy using, trust and remember.","/services/website-design"],
["WEBSITE CARE","Keep your site available, secure and current without another job on your list.","/services/care-plans"],
["LOCAL SEO","Make your services and locations easier for customers and search engines to understand.","/services/local-seo"]
]),true)+
E.split("LESS EXPLAINING.<br>MORE ENQUIRING.",'<p>Your visitors should know what you do, where you work and how to contact you in seconds.</p><p>Your services, work and reputation should tell the story. Your next customer should never need to dig for a number.</p>'+E.button("See website design","/services/website-design"),"site")+
E.section("CUT THE NOISE.","Your website does not need marketing theatre.",E.cards([
["CLEAR SERVICES","Your customers find the work they need without fighting the navigation."],
["GENUINE PROOF","Your real photographs and credentials carry the weight."],
["STRAIGHT CONTACT","Your next enquiry is never more than a tap away."]
]))+
E.cta("GET YOUR BUSINESS<br>LOOKING THE PART.","Build confidence in your business long before the first call.")};
serviceDetail=function(slug){const d={
"website-design":{head:"LOOK LIKE THE<br>BUSINESS YOU ARE.",lead:"You have a reputation worth protecting. Get a website your customers can trust and actually enjoy using.",photo:"build",cards:[
["A BUSINESS THEY REMEMBER","Your design reflects your standard of workmanship instead of looking like every other template."],
["SERVICES THEY UNDERSTAND","Your customers can quickly find the work you do and the areas you cover."],
["PROOF THEY CAN CHECK","Your genuine photographs, qualifications and reviews make it easier to choose you."],
["CONTACT THAT WORKS","Your quote requests and phone number stay easy to reach, on any screen."]],paragraph:"Your business should not look interchangeable with every other trade company. Your services, photographs and customers need to shape the site."},
"care-plans":{head:"YOUR WEBSITE.<br>TAKEN CARE OF.",lead:"Your customers do not care about servers or updates. They care whether your site works when they need it.",photo:"workshop",cards:[
["ALWAYS READY FOR CUSTOMERS","Your website should stay available, secure and usable."],
["LESS TO WORRY ABOUT","Your agreed upkeep and backups are dealt with without another task on your list."],
["YOUR INFORMATION STAYS CURRENT","Your services, contact details and business information can change as you grow."],
["NO VAGUE CONTRACTS","Your hosting, support and update allowance are set out clearly before you commit."]],paragraph:"You should know exactly what you are paying for, which changes are included and how your hosting and website access work."},
"local-seo":{head:"MAKE YOUR BUSINESS<br>EASIER TO FIND.",lead:"Your next customer needs the right service in the right area. Give Google a website it can crawl and understand — and give people a useful answer when they arrive.",photo:"electric",cards:[
["READABLE TO SEARCH ENGINES","Your pages have sensible headings, metadata and links that help Google understand them."],
["RIGHT SERVICES IN THE RIGHT PLACE","Your key jobs have relevant, useful pages instead of vague claims."],
["HONEST LOCAL COVERAGE","Your service areas are explained without pretending you operate from places you do not."],
["USEFUL MEASUREMENT","Your priorities can be shaped by real search and enquiry data instead of vanity numbers."]],paragraph:"No one can promise you first place on Google. Your site can have sound foundations, useful content and a clear commercial focus."}
}[slug];if(!d)return notFound();return E.hero(d.head,d.lead,d.photo)+
E.section("WHAT YOU GET.","Judge the result by what your customers experience.",E.cards(d.cards),true)+
E.split("YOUR BUSINESS.<br>FRONT AND CENTRE.",'<p>'+d.paragraph+'</p><p>Get something clear, reliable and built for its purpose.</p>'+E.button("Get a proper quote"),d.photo)+
E.section("STRAIGHT ANSWERS.","Know what matters before spending your money.",E.faqs([
["Will it work on a mobile?","Your website should be easy to read, navigate and contact from a phone."],
["Can my existing website be improved?","Your current site can be assessed first. A redesign is not always the sensible choice."],
["Will I own my website?","Your proposal should clearly state ownership, access, hosting and handover arrangements."],
["Are enquiries guaranteed?","No credible website provider can guarantee a fixed number of enquiries or search rankings."]
]))+
E.cta("YOUR NEXT STEP<br>IS SIMPLE.","Explain what your business needs and get an honest scope.")};
sectorsPage=function(){return E.hero("YOUR TRADE.<br>DONE PROPERLY.","You know your customers and your work. Get a website that reflects both.","build")+
E.section("FIND YOUR TRADE.","Your services should shape the website, not the other way round.",'<div class="forge-trades">'+sectors.map(s=>'<a href="/sectors/'+s.slug+'"><img loading="lazy" src="'+img(s.image,700)+'" alt="Real trade industry photography"><strong>'+s.short+'</strong><span>See your sector ↗</span></a>').join("")+'</div>',true)+
E.section("SHOW WHAT<br>SETS YOU APART.","Your experience and your standards deserve to be visible.",E.cards([
["YOUR BEST WORK","Finished projects and authentic photography show the quality customers can expect."],
["YOUR SPECIFIC SERVICES","Visitors find the jobs they actually need instead of reading vague catch-all copy."],
["YOUR LOCAL REPUTATION","Your real coverage, credentials and reviews give people the confidence to call."]
]))+E.cta("YOU KNOW YOUR TRADE.<br>SHOW YOUR CUSTOMERS.","Make your work the reason people choose your business.")};
sectorDetail=function(slug){const s=sectors.find(x=>x.slug===slug),d=tradeCopy[slug];if(!s||!d)return notFound();return E.hero(d.headline,d.lead,d.photo)+
E.section("LET YOUR WORK<br>DO THE TALKING.","Your customers want evidence before they hand you a job.",E.cards([
["SHOW THE RIGHT JOBS","Put "+d.focus+" in front of the people looking for them."],
["MAKE TRUST VISIBLE","Show "+d.trust+" — only where those claims are true."],
["MAKE ENQUIRING EASY","Give customers a phone number or quotation form they can find without looking twice."]
]),true)+
E.split("DON'T LOSE THE JOB<br>BEFORE THE CALL.",'<p>'+d.issue+'</p><p>Your services should be easy to scan, your locations easy to check and your past work easy to inspect.</p>'+E.button("Discuss your website"),d.photo)+
E.section("WHAT YOUR CUSTOMERS<br>WANT TO KNOW.","Answer their questions without forcing them to ring for the basics.",E.faqs([
["Can you do my kind of job?","Your service pages should answer that with clear descriptions and real work."],
["Do you cover my area?","Your actual service area should be easy to check from any page."],
["Can I trust your business?","Relevant qualifications, genuine reviews and project examples should be visible."],
["How do I get a quote?","Your number and enquiry route should always be straightforward to find."]
]))+
E.section("SEE WHAT IS POSSIBLE.","These are design directions, not invented client case studies.",'<div class="forge-related"><a href="/work">Explore trades website concepts ↗</a></div>',true)+E.cta("GET THE WEBSITE<br>YOUR WORK DESERVES.","Give your customers confidence before the first conversation.")};
work=function(){return E.hero("YOUR WORK.<br>WORTH SHOWING.","You stand behind every job. Your website should make it obvious why your business is worth choosing.","build")+
E.section("EXPLORE THE<br>POSSIBILITIES.","You can see different design directions for your trade. These are illustrative concepts rather than claimed client results.",'<div class="forge-work-grid">'+projects.map((p,i)=>'<a href="/work/'+(i+1)+'"><img loading="lazy" src="'+img(p.image,900)+'" alt="Trade design concept"><h3>'+p.title+'</h3><p>'+p.intro+'</p><b>View design direction ↗</b></a>').join("")+'</div>'+E.proof,true)+
E.section("YOUR BEST WORK<br>IS YOUR BEST SALES TOOL.","Your website should show why your standards matter.",E.cards([
["REAL PROJECTS","Let your customers see the quality they can expect."],
["REAL PEOPLE","Build confidence in the business behind the name."],
["REAL REASONS TO CALL","Turn interest into a conversation with a clear next step."]
]))+E.cta("YOUR BUSINESS.<br>YOUR VERSION.","Get a website that looks like your work, not somebody else’s.")};
workDetail=function(slug){const p=projects[Number(slug)-1];if(!p)return notFound();return E.hero("YOUR TRADE.<br>A STRONGER LOOK.",p.intro,p.image)+
E.section("THE IDEA BEHIND<br>THE DESIGN.","For your business, the details would be yours: your work, your services and your customers.",E.cards([
["SHOW THE RIGHT SERVICES","Give visitors a direct route to the jobs you want more of."],
["BUILD CREDIBILITY","Make room for real projects, genuine reviews and your qualifications."],
["MAKE CONTACT SIMPLE","Keep your enquiry route clear, especially on a mobile."]
]),true)+
E.split("YOUR NAME.<br>YOUR STANDARD.",'<p>'+p.intro+'</p><p>The final direction would be shaped around your real business, not dressed up with fictional clients or claims.</p>'+E.proof+E.button("Explore your trade","/sectors/"+p.sector),p.image)+E.cta("SHOW YOUR BEST WORK.","Give your next customer a reason to trust you.")};
process=function(){return E.hero("NO RUNAROUND.<br>NO NONSENSE.","You need a website that looks good, works properly and helps people contact you. You should know what you are paying for.","site")+
E.section("KNOW WHERE<br>YOU STAND.","Your project should be straightforward from first conversation to launch.",E.cards([
["YOUR GOALS FIRST","Your services, service area and the jobs you want more of become the basis of your plan."],
["YOUR SCOPE IN WRITING","Know the deliverables, costs, timescales and responsibilities before you commit."],
["YOUR APPROVAL MATTERS","Review the design, content and agreed revisions before anything goes live."],
["YOUR SITE GETS CHECKED","Your mobile layout, content, links and contact routes need testing."],
["YOUR LAUNCH HAS A PLAN","Know what happens with your domain, hosting, website access and handover."],
["YOUR SUPPORT, YOUR CHOICE","Choose an ongoing care arrangement or a clear handover based on your needs."]
]),true)+
E.split("YOUR TIME<br>IS VALUABLE.",'<p>You should not have to chase endless emails or translate technical jargon.</p><p>Get clear decisions, useful updates and a website focused on your business.</p>'+E.button(), "workshop")+
E.cta("STOP PUTTING<br>IT OFF.","Find out what your business actually needs.")};
pricing=function(){return E.hero("NO HIDDEN<br>SURPRISES.","Your website should earn its place in your business. Know what you are buying and what it will cost.","workshop")+
E.section("THE RIGHT FIT<br>FOR YOUR BUSINESS.","Get what you need instead of paying for features you will never use.",'<div class="forge-pricing">'+[
["YOUR FIRST PROPER WEBSITE","Get a credible, mobile-friendly presence with clear services and contact options."],
["YOUR NEXT LEVEL","Get a stronger structure for more services, project examples and bigger ambitions."],
["YOUR WEBSITE LOOKED AFTER","Get agreed hosting, maintenance and support without worrying about the technical details."]
].map(x=>'<article><h3>'+x[0]+'</h3><p>'+x[1]+'</p><strong>Quoted to your scope</strong><a href="/contact">Get your quote ↗</a></article>').join("")+'</div><p class="forge-truth">Package prices are not yet confirmed. Your written proposal should cover costs, inclusions and exclusions. No prices have been invented.</p>',true)+
E.section("KNOW EXACTLY<br>WHAT YOU ARE BUYING.","Get clear answers before committing.",E.cards([
["YOUR BUILD COST","Know which pages, features and revisions are included."],
["YOUR ONGOING COST","Understand hosting, updates and any recurring charges."],
["YOUR SITE ACCESS","Know how ownership, access and handover will work."],
["YOUR TIMELINE","Agree your responsibilities and expected completion schedule."]
]))+E.cta("GET A STRAIGHT<br>ANSWER ON PRICE.","Tell us what your business needs and get a proper quote.")};
about=function(){return E.hero("THIS IS ABOUT<br>YOUR BUSINESS.","Your name is on your work. Your website should reflect the same standard, reliability and pride.","build")+
E.section("YOUR WORK<br>COMES FIRST.","You are not buying an agency’s story. You are improving the way your own business looks to the people who might hire you.",E.cards([
["SHOW YOUR STANDARD","Give visitors a first impression that matches your workmanship."],
["EXPLAIN YOUR SERVICES","Make the jobs you do and the areas you cover unmistakable."],
["EARN CUSTOMER TRUST","Put genuine evidence ahead of glossy promises."]
]),true)+
E.split("BRITISH WORK.<br>PROPERLY PRESENTED.",'<p>Your trade keeps Britain running: homes heated, lights on, buildings standing and gardens looking their best.</p><p>You take pride in doing the job properly. Your website should have the same backbone.</p><p>No gimmicks. No political slogans. No fabricated results.</p>'+E.button(),"site")+
E.cta("LET YOUR WORK<br>DO THE TALKING.","Put your business at the centre of every page.")};
journal=function(){return E.hero("LESS JARGON.<br>BETTER DECISIONS.","You have a business to run. Get useful advice on what your website needs — and what you can ignore.","workshop")+
E.section("KNOW WHAT<br>MATTERS.","Short, practical reads for trades businesses.",'<div class="forge-links">'+articles.map(a=>'<a href="/journal/'+a.slug+'"><h3>'+a.title+'</h3><p>'+a.intro+'</p><span>Read guide ↗</span></a>').join("")+'</div>',true)+E.cta("PUT IT INTO<br>PRACTICE.","Get a website your customers can understand and trust.")};
article=function(slug){const a=articles.find(x=>x.slug===slug);if(!a)return notFound();const sections={
"trade-website-checklist":[["ANSWER THE OBVIOUS QUESTIONS","Can you do the job? Are you local? Can customers trust you? How do they get in touch? Your pages need to make those answers obvious."],["SHOW REAL WORK","Your own finished jobs, genuine customer feedback and legitimate credentials are stronger than empty superlatives."],["MAKE MOBILE EASY","Your customers should not have to zoom, pinch or fight a form to get your number."],["STAY CURRENT","Old hours, wrong phone numbers and dead links cost trust. Check your site regularly."]],
"local-seo-trades":[["GIVE YOUR SERVICES A PROPER PAGE","Your core work deserves useful descriptions instead of one overloaded services page."],["BE HONEST ABOUT YOUR AREA","You do not need hundreds of copy-and-paste location pages or imaginary offices."],["GIVE GOOGLE A READABLE SITE","Clear headings, metadata, useful links and crawlable text help search engines interpret your business. Rankings cannot be guaranteed."],["LOOK AT REAL ENQUIRIES","Your objective is relevant customer interest, not a spreadsheet full of meaningless ranking screenshots."]],
"why-your-van-isnt-your-marketing":[["YOUR VAN OPENS THE DOOR","People notice your name on the road. When they search for you later, your website has to earn their confidence."],["YOUR ONLINE REPUTATION MATTERS","Real projects, reviews, service details and honest credentials build a reason to call."],["KEEP YOUR BRAND CONSISTENT","Your van, Google listing and website should look like the same business."],["MAKE THE NEXT STEP SIMPLE","Keep your phone number and quote request obvious on every device."]]
}[slug];return E.hero(a.title.toUpperCase(),a.intro,"workshop")+
'<section class="forge-section"><div class="shell forge-article"><div>'+sections.map(x=>'<section><h2>'+x[0]+'</h2><p>'+x[1]+'</p></section>').join("")+'</div><aside><h3>YOUR NEXT STEP</h3><p>You have done the work to build your reputation. Make sure customers can see it.</p>'+E.button("Explore services","/services")+'</aside></div></section>'+
E.cta("MAKE YOUR WEBSITE<br>WORK FOR YOU.","Your business deserves better than empty marketing talk.")};
contact=function(){return E.hero("YOUR NEXT JOB<br>STARTS HERE.","You know the work you want more of. Start a straightforward conversation about your business.","workshop")+
'<section class="forge-section"><div class="shell contact-layout"><div class="forge-contact-intro"><h2>YOUR BUSINESS.<br>YOUR PRIORITIES.</h2><p>Tell us your trade, where you work, what you want your website to achieve and what is holding you back.</p><p>You should get a clear discussion about the right next step — not a pile of marketing jargon.</p><p class="forge-truth">This form prepares an email draft. It does not currently deliver enquiries automatically; a verified recipient or form service is needed before launch.</p></div><form class="contact-form" id="enquiry-form"><label>Your name<input name="name" required autocomplete="name"></label><label>Your business<input name="business" required autocomplete="organization"></label><label>Your email<input type="email" name="email" required autocomplete="email"></label><label>Your trade<select name="trade" required><option value="">Choose your trade</option>'+sectors.map(s=>'<option>'+s.name+'</option>').join("")+'<option>Other trade</option></select></label><label>What do you need?<select name="service" required><option value="">Choose a service</option><option>New website</option><option>Website redesign</option><option>Website care</option><option>Local SEO</option><option>Not sure yet</option></select></label><label>What are you looking to achieve?<textarea name="message" required placeholder="Your services, location, existing website and the work you want more of"></textarea></label><button class="btn btn-red" type="submit">Prepare your enquiry ↗</button><p class="form-help" id="form-status" role="status">Your email application will open a draft. You must add the recipient and send it yourself.</p></form></div></section>'};
notFound=function(){return E.hero("WRONG TURN.","That page is not here. Your next step is easy.","workshop")+E.cta("BACK TO WORK.","Find the page your business needs.")};
render();
