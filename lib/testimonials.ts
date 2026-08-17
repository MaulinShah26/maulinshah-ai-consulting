export type TestimonialKey = "vineet" | "kuntal" | "jay" | "satyajit";

export type Testimonial = {
  name: string;
  initials: string;
  role: string;
  company: string;
  maulinRole: string;
  quote: string;
  linkedin: string;
  website: string;
};

export const testimonials: Record<TestimonialKey, Testimonial> = {
  vineet: {
    name: "Vineet Khanna",
    initials: "VK",
    role: "Co Founder",
    company: "Supertails",
    maulinRole: "EIR, Data & AI Initiatives",
    quote:
      "Maulin works well at the intersection of data, AI and business. He can take an ambiguous problem, structure it clearly and move it toward something the team can actually use. What I value most is that he stays focused on the business decision the work needs to improve.",
    linkedin: "https://in.linkedin.com/in/vineetkhanna1985",
    website: "https://supertails.com/",
  },
  kuntal: {
    name: "Kuntal Shah",
    initials: "KS",
    role: "Co Founder",
    company: "CricHeroes",
    maulinRole: "Senior Data Scientist",
    quote:
      "Maulin has always looked at data as a product and business capability, not just an analytics function. He is comfortable taking ownership of open ended problems, working through ambiguity and turning data into something useful for both the business and the user.",
    linkedin: "https://in.linkedin.com/in/kuntalshah37",
    website: "https://cricheroes.in/",
  },
  jay: {
    name: "Jay Shah",
    initials: "JS",
    role: "CEO",
    company: "Lericon Informatics",
    maulinRole: "Associate Analytics Consultant",
    quote:
      "Maulin was someone we could trust with analytical problems that required both technical understanding and business context. He worked independently, approached problems methodically and focused on producing answers stakeholders could actually use.",
    linkedin: "https://in.linkedin.com/in/jay-shah-b84b5514",
    website: "https://lericoninfo.com/",
  },
  satyajit: {
    name: "Satyajit Dwivedi",
    initials: "SD",
    role: "Regional Director",
    company: "SAS",
    maulinRole: "Analytics project, Malaysia",
    quote:
      "I worked with Maulin on a project in Malaysia where he had to operate across technical requirements, client expectations and business context. He was dependable, quick to understand the problem and clear with stakeholders. I would trust him with complex analytical engagements that require ownership and judgement.",
    linkedin: "https://in.linkedin.com/in/satyajitdwivedi",
    website: "https://www.sas.com/",
  },
};
