export type TestimonialKey = "vineet" | "kuntal" | "jay" | "satyajit";

export type Testimonial = {
  name: string;
  initials: string;
  image: string;
  logo: string;
  role: string;
  company: string;
  location?: string;
  maulinRole: string;
  quote: string;
  linkedin: string;
  website: string;
};

export const testimonials: Record<TestimonialKey, Testimonial> = {
  vineet: {
    name: "Vineet Khanna",
    initials: "VK",
    image:
      "https://media.assettype.com/outlookbusiness/2026-02-10/1ed7h28m/WhatsApp-Image-2026-02-10-at-19.26.20.jpeg?auto=format%2Ccompress&dpr=1.0&fit=max&format=webp&w=801",
    logo: "/logos/supertails.jpg",
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
    image:
      "https://static.wixstatic.com/media/7796cb_621d0328c55a434eaea04519b3955ac2~mv2.jpg",
    logo: "/logos/cricheroes.png",
    role: "Co Founder",
    company: "CricHeroes",
    maulinRole: "Senior Data Scientist",
    quote:
      "Maulin has always looked at data as a product and business capability, not just an analytics function. He is comfortable taking ownership of open ended problems, working through ambiguity and turning data into something useful for both the business and the user.",
    linkedin: "https://www.linkedin.com/in/kuntalshah37/",
    website: "https://cricheroes.in/",
  },
  jay: {
    name: "Jay Shah",
    initials: "JS",
    image:
      "https://lericoninfo.com/wp-content/uploads/2025/08/1661016483330-removebg-preview.png",
    logo: "https://lericoninfo.com/wp-content/uploads/2025/07/logo-removebg-preview.png",
    role: "CEO",
    company: "Lericon Informatics",
    maulinRole: "Associate Analytics Consultant",
    quote:
      "Maulin was someone we could trust with analytical problems that required both technical understanding and business context. He worked independently, approached problems methodically and focused on producing answers stakeholders could actually use.",
    linkedin: "https://in.linkedin.com/in/jay-shah-b84b5514",
    website: "https://lericoninfo.com/",
  },
  satyajit: {
    name: "Dr Satyajit Dwivedi",
    initials: "SD",
    image:
      "https://lh3.googleusercontent.com/litbGVCHcdg7729OB1xr4NKfpliJstc0E-i7bx9nRNRfDg2t1MwXZO7CjVkZdzFiNbxSHQisb9ecx1tDRgYapleU105swJHiynex",
    logo:
      "https://www.sas.com/en/news/media-gallery/all-images/sas-logo-midnight/_jcr_content/par/image_360101046.img.png/1694533953092.png",
    role: "Regional Director - Customer Advisory",
    company: "SAS Institute",
    location: "New Delhi, India",
    maulinRole: "Client engagement, Malaysia",
    quote:
      "I worked with Maulin on a client engagement in Malaysia where he had to operate across technical requirements, client expectations and business context. He was dependable, quick to understand the problem and clear with stakeholders. I would trust him with complex analytical engagements that require ownership and judgement.",
    linkedin: "https://in.linkedin.com/in/satyajitdwivedi",
    website: "https://www.sas.com/",
  },
};
