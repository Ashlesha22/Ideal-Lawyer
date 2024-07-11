const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["harassment", "harassment at workplace", "mental harassment"],
    ["refund", "right to claim a refund", "right to get refund"],
    ["traffic crimes","traffic"],
    ["use of mobile while driving", "mobile phones while driving"],
    ["drink and drive", "drunk driver"],
    [
      "driving without a license",
      "no licence",
    ],
    ["theft","Robbery","stealing"],
    ["property crimes", "property"],
    ["fraud", "bored", "tired"],
    ["lawyers", "lawyer"],
    ["animal laws", "Animal laws", "Animal Laws", "animals", "Animals"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["Maharashtra"],
    ["help"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    ["keywords"],
    ["keywords","Keywords","key","hehe","funny","joke"]
  ]
  const replies = [
    ["Hello!Find information about crimes here.Type keywords", "Hi!Find information about crimes here. Type keywords", "Hey!Find information about crimes here. Type keywords", "Hi there!Find information about crimes here. Type keywords","HelloFind information about crimes here. Type keywords"],
    
    [
      "Any man who commits the offense specified in clause (i) or clause (ii) or clause (iii) of sub-section (1) shall be punished with rigorous imprisonment for a term which may extend to three years, or with a fine, or with both.",
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 is a legislative act in India that seeks to protect women from sexual harassment at their place of work. It was passed by the Lok Sabha (the lower house of the Indian Parliament) on 3 September 2012. It was passed by the Rajya Sabha (the upper house of the Indian Parliament) on 26 February 2013.The Bill got the assent of the President on 23 April 2013.[2] The Act came into force from 9 December 2013. This statute superseded the Vishaka Guidelines for Prevention Of Sexual Harassment (POSH) introduced by the Supreme Court (SC) of India. It was reported by the International Labour Organization that very few Indian employers were compliant to this statute. Most Indian employers have not implemented the law despite the legal requirement that any workplace with more than 10 employees need to implement it. According to a FICCI-EY November 2015 report, 36% of Indian companies and 25% among MNCs are not compliant with the Sexual Harassment Act, 2013. The government has threatened to take stern action against employers who fail to comply with this law.",
      "1. The Protection of Women from Domestic Violence Act, 2005:The Protection of Women from Domestic Violence Act 2005, helps women who are a victim of domestic violence of any kind. This act is a legal medium using which they can take action against the person.Once a woman initiates a legal action under the provisions of this act, she shall receive protection from any reoccurrence until the case goes to trial.2. Dowry Prohibition Act, 1961:To break the norms of the century-old practice, the enactment of the Dowry Prohibition Act 1961of prevents demanding and accepting dowry from a woman family."],
    [
      "Every consumer is entitled to a full refund under the terms of the Consumer Protection Act of 1986 if they are dissatisfied with their purchase or are unable to use the services they have paid for.In truth, printing. No exchange or refund on bills and invoices is against the law and constitutes an unfair business conduct.",
      "Every consumer is entitled to a full refund under the terms of the Consumer Protection Act of 1986 if they are dissatisfied with their purchase or are unable to use the services they have paid for.In truth, printing. No exchange or refund on bills and invoices is against the law and constitutes an unfair business conduct.",
      "Every consumer is entitled to a full refund under the terms of the Consumer Protection Act of 1986 if they are dissatisfied with their purchase or are unable to use the services they have paid for.In truth, printing. No exchange or refund on bills and invoices is against the law and constitutes an unfair business conduct.",
      "Every consumer is entitled to a full refund under the terms of the Consumer Protection Act of 1986 if they are dissatisfied with their purchase or are unable to use the services they have paid for.In truth, printing. No exchange or refund on bills and invoices is against the law and constitutes an unfair business conduct."],
    [
      "Can you be more specific?","Please be more specific. You can visit our search page for more information."
    ],
    ["As per the Section 177 of the Motor Vehicle Act, 1988, a driver can be fined for using a mobile phone while driving if it causes inconvenience or poses a risk to the safety of other road users. While the fine was earlier Rs 100 to Rs 300, it has been now increased to Rs 1,000, while the compounding fee is Rs 500.",""],
    [" In case you are caught driving drunk, the penalty for it is Rs.10,000 and/or imprisonment of up to 6 months for a first-time offence and Rs.15,000 and/or imprisonment of up to 2 years for a subsequent offence. This fine will be required to be paid in the court."],
    ["As per the new traffic rules and fines, the fine for driving without insurance for the motor vehicle is Rs 1,000 and /or imprisonment of up to 3 months to Rs 2,000 and/or imprisonment of up to 3 months for the first-time offenders and Rs 4,000 and/or imprisonment of up to 3 months for the subsequent offences.", "I don't have a name"],
    ["Section 379 in The Indian Penal Code 379. Punishment for theft. Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."]
    [ "Section 379 in The Indian Penal Code 379. Punishment for theft.Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."],
    ["Any offense that is related to private property of any individual or group of individuals is known as property crime. In common parlance, acts such as theft, burglary, shoplifting, vandalism are attributed as property crimes. The Indian judiciary has applicable provisions for acts that encroach upon the right of ownership of private properties of individuals and in the process affect the life and safety of individuals. Crimes related to property always tend to enrich the offenders. These crimes are more penal than civil in nature. Often these crimes usually involve threats of violence, force, extortion, robbery, etc.", "Any offense that is related to private property of any individual or group of individuals is known as property crime. In common parlance, acts such as theft, burglary, shoplifting, vandalism are attributed as property crimes. The Indian judiciary has applicable provisions for acts that encroach upon the right of ownership of private properties of individuals and in the process affect the life and safety of individuals. Crimes related to property always tend to enrich the offenders. These crimes are more penal than civil in nature. Often these crimes usually involve threats of violence, force, extortion, robbery, etc."],
    ["Indian Penal Code, 1860 (IPC).This sets out the penal provisions concerning the majority of criminal offences in India. With regards to fraud, the IPC penalises dishonest misappropriation of property, criminal breach of trust, cheating and dishonestly inducing delivery of property, and forgery (among others).", "Indian Penal Code, 1860 (IPC). This sets out the penal provisions concerning the majority of criminal offences in India. With regards to fraud, the IPC penalises dishonest misappropriation of property, criminal breach of trust, cheating and dishonestly inducing delivery of property, and forgery (among others).", "Indian Penal Code, 1860 (IPC).This sets out the penal provisions concerning the majority of criminal offences in India. With regards to fraud, the IPC penalises dishonest misappropriation of property, criminal breach of trust, cheating and dishonestly inducing delivery of property, and forgery (among others)."],
    ["You can book an appointment from the lawyer portal", "Find suitable advice and appoinement. Visit the lawyer portal"],
    ["Killing or injuring an animal is a cognizable offence under the IPC read with Section 3 of the Prevention of Cruelty to Animals Act (1960) which holds that:no person shall beat, kick, injure, kill, torture, cause stress and discomfort to any animal or being the owner, allow such treatment to be inflicted upon any animal. Section 428 of the IPC states the punishment for killing or injuring an animal as follows,Whoever commits mischief by killing, poisoning, maiming or rendering useless any animal or animals of the value of ten rupees or upwards, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.Section 429 of the IPC states the punishment for other kinds of animals as follows: Whoever commits mis¬chief by killing, poisoning, maiming or rendering useless, any elephant, camel, horse, mule, buffalo, bull, cow or ox, whatever may be the value thereof, or any other animal of the value of fifty rupees or upwards, shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.Section 378 of the IPC makes stealing an animal tantamount to the crime of theft. Further, Section 508 of the IPC criminalizes criminal intimidation which is to be charged if animal caretakers are prevented illegally or forcibly from keeping pets or feeding stray animals.", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["You can have detailed description of laws in state on our websiteS", "looking for a lawyer,book an appointment now"],
    ["Indian constitution is for you, don't hesitate to seek help. Police - 102; Ambulance - 103; Fire - 101; Gas emergency - 104; Traffic police - 177; Search & rescue - 108."],
    ["Police - 102; Ambulance - 103; Fire - 101; Gas emergency - 104; Traffic police - 177; Search & rescue - 108."],
    ["Please enter the specified keywords","I don't understand","Sorry!"],
    ["harassment,harassment at workplace,mental harassment,refund,traffic,drink and drive,use of mobile while driving,theft,fraud,property crimes,animal laws"],
  ]
  
  
  