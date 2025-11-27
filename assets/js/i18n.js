// Internationalization (i18n) System
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            pricing: "Pricing",
            services: "Services",
            tips: "Tips",
            contact: "Contact"
        },
        hero: {
            title: "Natural results.\nUniquely you.",
            cta: "BOOK YOUR CONSULT"
        },
        welcome: {
            title: "Welcome to Skin Technologies Institute",
            intro: "At Skin Technologies Institute, we believe that beautiful, healthy skin is your right at every age. Located in the heart of Beaconsfield, Quebec, we're dedicated to providing you with the highest quality professional skin care treatments and personalized care that helps you look and feel your absolute best.",
            mission: "Our mission is simple: to help you achieve natural, radiant results that enhance your unique beauty. Whether you're looking to address specific concerns, maintain your skin's health, or simply indulge in some well-deserved self-care, our expert team is here to guide you every step of the way.",
            approach: "We combine advanced techniques with a warm, welcoming environment where you can feel comfortable and confident. From injectable treatments to rejuvenating facials, body contouring to wellness therapies, we offer a comprehensive range of services tailored to your individual needs.",
            invitation: "We invite you to discover what makes Skin Technologies Institute special. Book your consultation today and take the first step toward the glowing, healthy skin you deserve."
        },
        features: {
            title: "Our Services",
            subtitle: "Discover our comprehensive range of advanced aesthetic treatments designed to help you look and feel your best.",
            learnmore: "Learn More",
            seepricing: "See Pricing",
            injectables: {
                title: "Injectables",
                desc: "Enhance your natural beauty with precision injectable treatments that deliver subtle, natural-looking results."
            },
            face: {
                title: "Face Treatments",
                desc: "Rejuvenate and restore your skin's natural radiance with our advanced facial treatments."
            },
            body: {
                title: "Body Treatments",
                desc: "Achieve your body contouring and skin tightening goals with our advanced non-invasive treatments."
            },
            wellness: {
                title: "Wellness",
                desc: "Support your overall health and vitality with our comprehensive wellness treatments."
            }
        },
        about: {
            title: "About Skin Technologies Institute",
            intro: "Founded in 2010, Skin Technologies Institute has been a trusted name in aesthetic treatments and wellness services. Located in Beaconsfield, Quebec, we serve clients from across the Greater Montreal area and beyond, providing personalized care and exceptional results.",
            mission: {
                title: "Our Mission",
                text: "At Skin Technologies Institute, we are committed to providing the highest quality professional skin care services. Our mission is to help you achieve natural, beautiful results that enhance your unique features.",
                commitment: "We combine medical expertise with cutting-edge technology to deliver personalized solutions for your unique skin concerns and wellness goals. Every treatment is tailored to your individual needs, ensuring you receive the care and attention you deserve."
            },
            values: {
                title: "Our Values",
                subtitle: "The principles that guide everything we do",
                excellence: {
                    title: "Excellence",
                    desc: "We strive for excellence in every treatment, using only the highest quality products and most advanced techniques to ensure exceptional results."
                },
                integrity: {
                    title: "Integrity",
                    desc: "We maintain the highest standards of integrity and professionalism, building trust through honest communication and ethical practices."
                },
                innovation: {
                    title: "Innovation",
                    desc: "We stay at the forefront of skin care innovation, continuously learning and adopting the latest techniques and technologies."
                },
                community: {
                    title: "Community",
                    desc: "We believe in building lasting relationships with our clients, creating a welcoming community where everyone feels valued and cared for."
                }
            },
            history: {
                title: "Our Story",
                text: "Founded in 2010 with a passion for excellence in professional skin care, Skin Technologies Institute has grown from a small practice to a trusted destination for aesthetic treatments and wellness services. Our journey has been guided by a commitment to providing personalized care, using the latest technologies, and maintaining the highest standards of safety and professionalism.",
                growth: "Over the years, we've expanded our services to include a comprehensive range of treatments, from injectables and facial treatments to body contouring and wellness therapies. What remains constant is our dedication to helping each client look and feel their absolute best."
            },
            team: {
                title: "Our Expert Team",
                intro: "Our team consists of highly qualified medical professionals dedicated to providing safe, effective, and personalized treatments.",
                qualifications: {
                    title: "Professional Qualifications",
                    medical: "Licensed medical professionals (MD, RN, NP) with specialized training in aesthetic medicine",
                    injectables: "Certified injectors with extensive experience in Botox, dermal fillers, and advanced injection techniques",
                    lasers: "Certified laser technicians trained on the latest aesthetic laser and energy-based devices",
                    continuing: "Ongoing continuing education to stay current with the latest techniques and safety protocols",
                    safety: "Comprehensive training in patient safety, infection control, and emergency procedures"
                },
                experience: {
                    title: "Clinical Experience",
                    text: "Our practitioners bring years of clinical experience in dermatology, plastic surgery, and aesthetic medicine. Each team member has completed rigorous training programs and maintains active certifications in their respective specialties. We are committed to providing evidence-based treatments that prioritize your safety and deliver natural, beautiful results.",
                    commitment: "We understand that every client is unique, and we take the time to listen to your concerns, answer your questions, and develop a treatment plan that aligns with your goals. Your comfort, safety, and satisfaction are our top priorities."
                }
            },
            cta: {
                title: "Ready to Begin Your Journey?",
                desc: "Experience the difference that expert care and personalized attention can make. Schedule your consultation today.",
                button: "Book Your Consultation"
            },
            image: {
                alt: "STI Institute"
            }
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive skin care and wellness solutions tailored to your unique needs",
            intro: {
                title: "Transform Your Skin, Enhance Your Confidence",
                desc: "At Skin Technologies Institute, we offer a comprehensive range of advanced aesthetic treatments designed to help you look and feel your best. Our expert team combines medical expertise with cutting-edge technology to deliver personalized solutions for your unique skin concerns and wellness goals."
            },
            viewpricing: "View Pricing",
            consultation: "Book Consultation",
            injectables: {
                title: "Injectable Treatments",
                subtitle: "Enhance your natural beauty with precision injectable treatments that deliver subtle, natural-looking results.",
                featured: {
                    title: "Injectable Treatments",
                    desc: "Enhance your natural beauty with precision injectable treatments including Botox, Dysport, and dermal fillers. Our expert team delivers subtle, natural-looking results tailored to your unique features.",
                    benefit1: "FDA-approved treatments",
                    benefit2: "Natural-looking results",
                    benefit3: "Expert injectors",
                    benefit4: "Customized to your goals"
                },
                botox: {
                    title: "Botox & Dysport",
                    desc: "Smooth away fine lines and wrinkles with FDA-approved neurotoxin treatments. Perfect for crow's feet, forehead lines, and frown lines.",
                    benefit1: "Reduces dynamic wrinkles",
                    benefit2: "Prevents new lines from forming",
                    benefit3: "Quick treatment, minimal downtime",
                    benefit4: "Results last 3-4 months"
                },
                fillers: {
                    title: "Dermal Fillers",
                    desc: "Restore volume, smooth lines, and enhance facial contours with premium hyaluronic acid fillers. Ideal for lips, cheeks, and under-eye areas.",
                    benefit1: "Restores lost volume",
                    benefit2: "Smooths deep wrinkles",
                    benefit3: "Enhances facial contours",
                    benefit4: "Natural-looking results"
                },
                lips: {
                    title: "Lip Enhancements",
                    desc: "Achieve fuller, more defined lips with expertly placed dermal fillers. We create natural-looking volume that enhances your unique features.",
                    benefit1: "Adds volume and definition",
                    benefit2: "Smooths lip lines",
                    benefit3: "Natural-looking results",
                    benefit4: "Customized to your goals"
                }
            },
            face: {
                title: "Face Treatments",
                subtitle: "Rejuvenate and restore your skin's natural radiance with our advanced facial treatments.",
                hydrafacial: {
                    title: "Hydrafacial",
                    desc: "Our signature treatment combines deep cleansing, exfoliation, extraction, hydration, and antioxidant protection in one relaxing session. Suitable for all skin types with immediate, visible results.",
                    benefit1: "Deeply cleanses and unclogs pores",
                    benefit2: "Removes dead skin cells",
                    benefit3: "Hydrates and nourishes skin",
                    benefit4: "No downtime, instant glow"
                },
                chemical: {
                    title: "Chemical Peels",
                    desc: "Resurface and renew your skin with customized chemical peels. Effective for treating acne, hyperpigmentation, fine lines, and uneven texture.",
                    benefit1: "Improves skin texture and tone",
                    benefit2: "Reduces fine lines and wrinkles",
                    benefit3: "Fades dark spots and pigmentation",
                    benefit4: "Customized depth and strength"
                },
                microneedling: {
                    title: "Microneedling",
                    desc: "Stimulate your skin's natural collagen production with microneedling. Ideal for reducing scars, fine lines, and improving overall skin texture.",
                    benefit1: "Boosts collagen production",
                    benefit2: "Reduces scars and stretch marks",
                    benefit3: "Improves skin texture",
                    benefit4: "Minimizes pore appearance"
                },
                laser: {
                    title: "Laser & IPL Treatments",
                    desc: "Advanced laser and IPL technology to address pigmentation, redness, fine lines, and overall skin rejuvenation with precision and effectiveness.",
                    benefit1: "Reduces sun damage and age spots",
                    benefit2: "Treats rosacea and redness",
                    benefit3: "Smooths fine lines and wrinkles",
                    benefit4: "Improves overall skin quality"
                }
            },
            body: {
                title: "Body Treatments",
                subtitle: "Achieve your body contouring and skin tightening goals with our advanced non-invasive treatments.",
                featured: {
                    title: "Body Treatments",
                    desc: "Transform your body with our advanced non-invasive treatments. From body contouring to cellulite reduction and skin tightening, we help you achieve your wellness goals.",
                    benefit1: "Non-invasive technology",
                    benefit2: "Visible results",
                    benefit3: "No downtime",
                    benefit4: "Personalized treatment plans"
                },
                contouring: {
                    title: "Body Contouring",
                    desc: "Reduce stubborn fat and reshape your body with BodyFx technology. Non-invasive treatment that targets fat cells while tightening skin.",
                    benefit1: "Reduces fat in targeted areas",
                    benefit2: "Tightens and firms skin",
                    benefit3: "No surgery, no downtime",
                    benefit4: "Visible results in weeks"
                },
                cellulite: {
                    title: "Cellulite Reduction",
                    desc: "Smooth away cellulite with VelaShape III technology. This advanced treatment combines radiofrequency, infrared light, and vacuum massage for visible results.",
                    benefit1: "Reduces appearance of cellulite",
                    benefit2: "Improves skin texture",
                    benefit3: "Non-invasive and comfortable",
                    benefit4: "Long-lasting results"
                },
                tightening: {
                    title: "Skin Tightening",
                    desc: "Firm and tighten loose skin with Potenza RF Microneedling. This treatment stimulates collagen production for tighter, more youthful-looking skin.",
                    benefit1: "Tightens loose or sagging skin",
                    benefit2: "Stimulates collagen production",
                    benefit3: "Improves skin elasticity",
                    benefit4: "Suitable for body and face"
                }
            },
            wellness: {
                title: "Wellness Services",
                subtitle: "Support your overall health and vitality with our comprehensive wellness treatments.",
                featured: {
                    title: "Wellness Services",
                    desc: "Support your overall health and vitality with our comprehensive wellness treatments. From IV therapy to vitamin injections, we help you feel your best from the inside out.",
                    benefit1: "100% nutrient absorption",
                    benefit2: "Boosts energy and immunity",
                    benefit3: "Personalized wellness plans",
                    benefit4: "Expert guidance and support"
                },
                iv: {
                    title: "IV Therapy",
                    desc: "Replenish your body with essential vitamins, minerals, and nutrients through intravenous therapy. Customized blends for energy, immunity, hydration, and more.",
                    benefit1: "100% absorption of nutrients",
                    benefit2: "Boosts energy and immunity",
                    benefit3: "Improves hydration",
                    benefit4: "Customized to your needs"
                },
                vitamin: {
                    title: "Vitamin Injections",
                    desc: "Quick and effective vitamin B12 injections to boost your energy, metabolism, and overall wellness. Perfect for busy lifestyles.",
                    benefit1: "Boosts energy levels",
                    benefit2: "Supports metabolism",
                    benefit3: "Quick 5-minute treatment",
                    benefit4: "No downtime required"
                },
                consult: {
                    title: "Wellness Consultation",
                    desc: "Comprehensive wellness assessment to create a personalized plan for your health and vitality goals. Our experts will guide you toward optimal wellness.",
                    benefit1: "Personalized wellness plan",
                    benefit2: "Expert guidance and support",
                    benefit3: "Comprehensive health assessment",
                    benefit4: "Ongoing support and follow-up"
                }
            },
            cta: {
                title: "Ready to Begin Your Journey?",
                desc: "Schedule a consultation with our expert team to discuss your goals and create a personalized treatment plan.",
                button: "Book Your Consultation"
            }
        },
        pricing: {
            title: "Pricing",
            subtitle: "À La Carte Menu",
            cta: "Book Consultation",
            contact: "Book Your Consultation",
            note: "All prices are subject to change. Consultation required for personalized treatment plans. Package discounts apply to same treatment type.",
            promotions: {
                title: "Special Offers",
                first: {
                    badge: "NEW CLIENT",
                    title: "First Time Client",
                    desc: "Enjoy a special introductory discount on your first visit"
                },
                three: {
                    badge: "5% OFF",
                    title: "3 Session Package",
                    desc: "Save 5% when you purchase 3 sessions"
                },
                six: {
                    badge: "10% OFF",
                    title: "6 Session Package",
                    desc: "Save 10% when you purchase 6 sessions"
                }
            },
            injectables: {
                title: "Injectable Treatments",
                botox: {
                    title: "Botox",
                    desc: "Per unit"
                },
                dysport: {
                    title: "Dysport",
                    desc: "Per unit"
                },
                filler: {
                    title: "Dermal Filler (1ml)",
                    desc: "Juvederm, Restylane, or similar"
                },
                lip: {
                    title: "Lip Enhancement",
                    desc: "0.5ml - 1ml"
                },
                cheek: {
                    title: "Cheek Enhancement",
                    desc: "Per syringe"
                },
                consult: {
                    title: "Consultation",
                    desc: "Complimentary with treatment"
                }
            },
            face: {
                title: "Face Treatments",
                hydrafacial: {
                    title: "Hydrafacial",
                    desc: "Deep cleansing facial treatment"
                },
                chemical: {
                    title: "Chemical Peel",
                    desc: "Light to medium depth"
                },
                micro: {
                    title: "Microdermabrasion",
                    desc: "Exfoliation and skin renewal"
                },
                microneedling: {
                    title: "Microneedling",
                    desc: "Collagen induction therapy"
                },
                ipl: {
                    title: "IPL Photofacial",
                    desc: "Pigmentation and redness reduction"
                },
                laser: {
                    title: "Laser Resurfacing",
                    desc: "Fractional laser treatment"
                },
                custom: {
                    title: "Custom Facial",
                    desc: "Tailored to your skin needs"
                }
            },
            body: {
                title: "Body Treatments",
                bodyfx: {
                    title: "BodyFx",
                    desc: "Fat reduction and skin tightening"
                },
                velashape: {
                    title: "VelaShape III",
                    desc: "Cellulite reduction"
                },
                potenza: {
                    title: "Potenza RF Microneedling",
                    desc: "Body skin tightening"
                },
                wrap: {
                    title: "Body Wrap",
                    desc: "Detoxifying and contouring"
                }
            },
            wellness: {
                title: "Wellness",
                iv: {
                    title: "IV Therapy",
                    desc: "Vitamin infusion therapy"
                },
                vitamin: {
                    title: "Vitamin B12 Injection",
                    desc: "Energy and metabolism boost"
                },
                consult: {
                    title: "Wellness Consultation",
                    desc: "Personalized wellness assessment"
                }
            }
        },
        tips: {
            title: "Skin Care Tips",
            subtitle: "Expert advice for healthy, glowing skin",
            readmore: "Read More",
            daily: {
                title: "Daily Skin Care Routine",
                desc: "Learn the essential steps for a daily skin care routine that keeps your skin healthy and radiant."
            },
            sun: {
                title: "Sun Protection Essentials",
                desc: "Why sun protection is crucial and how to choose the right SPF for your skin type."
            },
            hydration: {
                title: "Hydration and Your Skin",
                desc: "Discover the importance of hydration for maintaining healthy, youthful-looking skin."
            },
            aging: {
                title: "Anti-Aging Strategies",
                desc: "Effective strategies to slow down the aging process and maintain youthful skin."
            },
            products: {
                title: "Choosing the Right Products",
                desc: "How to select skin care products that work best for your unique skin type and concerns."
            },
            seasonal: {
                title: "Seasonal Skin Care",
                desc: "Adapt your skin care routine to changing seasons for optimal results year-round."
            }
        },
        contact: {
            title: "Contact Us",
            subtitle: "We'd love to hear from you. Get in touch with us today.",
            info: {
                title: "Get In Touch",
                address: {
                    title: "Address"
                },
                hours: {
                    title: "Office Hours",
                    text: "Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 10:00 AM - 2:00 PM<br>Sunday: Closed"
                },
                email: {
                    title: "Email"
                },
                phone: {
                    title: "Phone"
                }
            },
            form: {
                title: "Send Us a Message",
                name: "Name",
                email: "Email",
                phone: "Phone",
                subject: "Subject",
                message: "Message",
                submit: "Send Message"
            },
            map: {
                title: "Find Us"
            }
        },
        footer: {
            links: {
                title: "Quick Links"
            },
            contact: {
                title: "Contact"
            },
            rights: "All rights reserved."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            pricing: "Tarifs",
            services: "Services",
            tips: "Conseils",
            contact: "Contact"
        },
        hero: {
            title: "Résultats naturels.\nUnique comme vous.",
            cta: "RÉSERVER VOTRE CONSULTATION"
        },
        welcome: {
            title: "Bienvenue à l'Institut des Technologies de la Peau",
            intro: "À l'Institut des Technologies de la Peau, nous croyons qu'une belle peau saine est votre droit à tout âge. Situé au cœur de Beaconsfield, Québec, nous nous engageons à vous offrir les traitements professionnels de soins de la peau de la plus haute qualité et des soins personnalisés qui vous aident à paraître et à vous sentir au mieux.",
            mission: "Notre mission est simple : vous aider à obtenir des résultats naturels et radieux qui mettent en valeur votre beauté unique. Que vous cherchiez à résoudre des préoccupations spécifiques, à maintenir la santé de votre peau ou simplement à vous offrir un peu de bien-être mérité, notre équipe d'experts est là pour vous guider à chaque étape.",
            approach: "Nous combinons des techniques avancées avec un environnement chaleureux et accueillant où vous pouvez vous sentir à l'aise et en confiance. Des traitements injectables aux soins du visage rajeunissants, du modelage corporel aux thérapies de bien-être, nous offrons une gamme complète de services adaptés à vos besoins individuels.",
            invitation: "Nous vous invitons à découvrir ce qui rend l'Institut des Technologies de la Peau spécial. Réservez votre consultation dès aujourd'hui et faites le premier pas vers la peau éclatante et saine que vous méritez."
        },
        features: {
            title: "Nos services",
            subtitle: "Découvrez notre gamme complète de traitements esthétiques avancés conçus pour vous aider à paraître et à vous sentir au mieux.",
            learnmore: "En savoir plus",
            seepricing: "Voir les tarifs",
            injectables: {
                title: "Injectables",
                desc: "Améliorez votre beauté naturelle avec des traitements injectables de précision qui offrent des résultats subtils et naturels."
            },
            face: {
                title: "Traitements du visage",
                desc: "Rajeunissez et restaurez l'éclat naturel de votre peau avec nos traitements faciaux avancés."
            },
            body: {
                title: "Traitements corporels",
                desc: "Atteignez vos objectifs de modelage corporel et de raffermissement de la peau avec nos traitements non invasifs avancés."
            },
            wellness: {
                title: "Bien-être",
                desc: "Soutenez votre santé globale et votre vitalité avec nos traitements de bien-être complets."
            }
        },
        about: {
            title: "À propos de l'Institut des Technologies de la Peau",
            intro: "Fondé en 2010, l'Institut des Technologies de la Peau est un nom de confiance en traitements esthétiques et services de bien-être. Situé à Beaconsfield, Québec, nous servons des clients de toute la région du Grand Montréal et au-delà, offrant des soins personnalisés et des résultats exceptionnels.",
            mission: {
                title: "Notre mission",
                text: "À l'Institut des Technologies de la Peau, nous nous engageons à fournir des services professionnels de soins de la peau de la plus haute qualité. Notre mission est de vous aider à obtenir des résultats naturels et beaux qui mettent en valeur vos caractéristiques uniques.",
                commitment: "Nous combinons l'expertise médicale avec une technologie de pointe pour offrir des solutions personnalisées à vos préoccupations cutanées uniques et à vos objectifs de bien-être. Chaque traitement est adapté à vos besoins individuels, garantissant que vous recevez les soins et l'attention que vous méritez."
            },
            values: {
                title: "Nos valeurs",
                subtitle: "Les principes qui guident tout ce que nous faisons",
                excellence: {
                    title: "Excellence",
                    desc: "Nous visons l'excellence dans chaque traitement, en utilisant uniquement les produits de la plus haute qualité et les techniques les plus avancées pour garantir des résultats exceptionnels."
                },
                integrity: {
                    title: "Intégrité",
                    desc: "Nous maintenons les plus hauts standards d'intégrité et de professionnalisme, en établissant la confiance grâce à une communication honnête et des pratiques éthiques."
                },
                innovation: {
                    title: "Innovation",
                    desc: "Nous restons à l'avant-garde de l'innovation en soins de la peau, en apprenant et en adoptant continuellement les dernières techniques et technologies."
                },
                community: {
                    title: "Communauté",
                    desc: "Nous croyons en la construction de relations durables avec nos clients, en créant une communauté accueillante où chacun se sent valorisé et pris en charge."
                }
            },
            history: {
                title: "Notre histoire",
                text: "Fondé en 2010 avec une passion pour l'excellence en soins professionnels de la peau, l'Institut des Technologies de la Peau est passé d'une petite pratique à une destination de confiance pour les traitements esthétiques et les services de bien-être. Notre parcours a été guidé par un engagement à fournir des soins personnalisés, à utiliser les dernières technologies et à maintenir les plus hauts standards de sécurité et de professionnalisme.",
                growth: "Au fil des ans, nous avons élargi nos services pour inclure une gamme complète de traitements, des injectables et traitements faciaux au modelage corporel et aux thérapies de bien-être. Ce qui reste constant, c'est notre dévouement à aider chaque client à paraître et à se sentir au mieux."
            },
            team: {
                title: "Notre équipe d'experts",
                intro: "Notre équipe est composée de professionnels médicaux hautement qualifiés dédiés à fournir des traitements sûrs, efficaces et personnalisés.",
                qualifications: {
                    title: "Qualifications professionnelles",
                    medical: "Professionnels médicaux autorisés (MD, RN, NP) avec une formation spécialisée en médecine esthétique",
                    injectables: "Injecteurs certifiés avec une vaste expérience en Botox, charges dermiques et techniques d'injection avancées",
                    lasers: "Techniciens laser certifiés formés sur les derniers dispositifs laser esthétiques et à base d'énergie",
                    continuing: "Formation continue pour rester à jour avec les dernières techniques et protocoles de sécurité",
                    safety: "Formation complète en sécurité des patients, contrôle des infections et procédures d'urgence"
                },
                experience: {
                    title: "Expérience clinique",
                    text: "Nos praticiens apportent des années d'expérience clinique en dermatologie, chirurgie plastique et médecine esthétique. Chaque membre de l'équipe a terminé des programmes de formation rigoureux et maintient des certifications actives dans leurs spécialités respectives. Nous nous engageons à fournir des traitements fondés sur des preuves qui priorisent votre sécurité et offrent des résultats naturels et beaux.",
                    commitment: "Nous comprenons que chaque client est unique, et nous prenons le temps d'écouter vos préoccupations, de répondre à vos questions et d'élaborer un plan de traitement qui correspond à vos objectifs. Votre confort, votre sécurité et votre satisfaction sont nos priorités absolues."
                }
            },
            cta: {
                title: "Prêt à commencer votre parcours?",
                desc: "Découvrez la différence que des soins experts et une attention personnalisée peuvent faire. Planifiez votre consultation dès aujourd'hui.",
                button: "Réserver votre consultation"
            },
            image: {
                alt: "Institut STI"
            }
        },
        services: {
            title: "Nos services",
            subtitle: "Solutions complètes de soins de la peau et de bien-être adaptées à vos besoins uniques",
            intro: {
                title: "Transformez votre peau, renforcez votre confiance",
                desc: "À l'Institut des Technologies de la Peau, nous offrons une gamme complète de traitements esthétiques avancés conçus pour vous aider à paraître et à vous sentir au mieux. Notre équipe d'experts combine l'expertise médicale avec une technologie de pointe pour offrir des solutions personnalisées à vos préoccupations cutanées uniques et à vos objectifs de bien-être."
            },
            viewpricing: "Voir les tarifs",
            consultation: "Réserver une consultation",
            injectables: {
                title: "Traitements injectables",
                subtitle: "Améliorez votre beauté naturelle avec des traitements injectables de précision qui offrent des résultats subtils et naturels.",
                featured: {
                    title: "Traitements injectables",
                    desc: "Améliorez votre beauté naturelle avec des traitements injectables de précision, notamment le Botox, le Dysport et les charges dermiques. Notre équipe d'experts offre des résultats subtils et naturels adaptés à vos caractéristiques uniques.",
                    benefit1: "Traitements approuvés par la FDA",
                    benefit2: "Résultats naturels",
                    benefit3: "Injecteurs experts",
                    benefit4: "Personnalisé selon vos objectifs"
                },
                botox: {
                    title: "Botox et Dysport",
                    desc: "Lissez les rides et les ridules avec des traitements neurotoxiques approuvés par la FDA. Parfait pour les pattes d'oie, les rides du front et les rides du lion.",
                    benefit1: "Réduit les rides dynamiques",
                    benefit2: "Empêche la formation de nouvelles rides",
                    benefit3: "Traitement rapide, temps d'arrêt minimal",
                    benefit4: "Résultats durent 3-4 mois"
                },
                fillers: {
                    title: "Charges dermiques",
                    desc: "Restaurez le volume, lissez les rides et améliorez les contours du visage avec des charges d'acide hyaluronique de qualité supérieure. Idéal pour les lèvres, les joues et les zones sous les yeux.",
                    benefit1: "Restaure le volume perdu",
                    benefit2: "Lisse les rides profondes",
                    benefit3: "Améliore les contours du visage",
                    benefit4: "Résultats naturels"
                },
                lips: {
                    title: "Amélioration des lèvres",
                    desc: "Obtenez des lèvres plus pleines et plus définies avec des charges dermiques placées avec expertise. Nous créons un volume naturel qui met en valeur vos caractéristiques uniques.",
                    benefit1: "Ajoute du volume et de la définition",
                    benefit2: "Lisse les lignes des lèvres",
                    benefit3: "Résultats naturels",
                    benefit4: "Personnalisé selon vos objectifs"
                }
            },
            face: {
                title: "Traitements du visage",
                subtitle: "Rajeunissez et restaurez l'éclat naturel de votre peau avec nos traitements faciaux avancés.",
                hydrafacial: {
                    title: "Hydrafacial",
                    desc: "Notre traitement signature combine nettoyage en profondeur, exfoliation, extraction, hydratation et protection antioxydante en une seule séance relaxante. Convient à tous les types de peau avec des résultats visibles immédiats.",
                    benefit1: "Nettoie en profondeur et débouche les pores",
                    benefit2: "Élimine les cellules mortes de la peau",
                    benefit3: "Hydrate et nourrit la peau",
                    benefit4: "Pas de temps d'arrêt, éclat instantané"
                },
                chemical: {
                    title: "Peelings chimiques",
                    desc: "Resurfaçez et renouvelez votre peau avec des peelings chimiques personnalisés. Efficace pour traiter l'acné, l'hyperpigmentation, les fines rides et la texture irrégulière.",
                    benefit1: "Améliore la texture et le teint de la peau",
                    benefit2: "Réduit les fines rides et les rides",
                    benefit3: "Estompe les taches sombres et la pigmentation",
                    benefit4: "Profondeur et force personnalisées"
                },
                microneedling: {
                    title: "Microneedling",
                    desc: "Stimulez la production naturelle de collagène de votre peau avec le microneedling. Idéal pour réduire les cicatrices, les fines rides et améliorer la texture globale de la peau.",
                    benefit1: "Stimule la production de collagène",
                    benefit2: "Réduit les cicatrices et les vergetures",
                    benefit3: "Améliore la texture de la peau",
                    benefit4: "Minimise l'apparence des pores"
                },
                laser: {
                    title: "Traitements laser et IPL",
                    desc: "Technologie laser et IPL avancée pour traiter la pigmentation, les rougeurs, les fines rides et le rajeunissement global de la peau avec précision et efficacité.",
                    benefit1: "Réduit les dommages solaires et les taches de vieillesse",
                    benefit2: "Traite la rosacée et les rougeurs",
                    benefit3: "Lisse les fines rides et les rides",
                    benefit4: "Améliore la qualité globale de la peau"
                }
            },
            body: {
                title: "Traitements corporels",
                subtitle: "Atteignez vos objectifs de modelage corporel et de raffermissement de la peau avec nos traitements non invasifs avancés.",
                featured: {
                    title: "Traitements corporels",
                    desc: "Transformez votre corps avec nos traitements non invasifs avancés. Du modelage corporel à la réduction de la cellulite et au raffermissement de la peau, nous vous aidons à atteindre vos objectifs de bien-être.",
                    benefit1: "Technologie non invasive",
                    benefit2: "Résultats visibles",
                    benefit3: "Pas de temps d'arrêt",
                    benefit4: "Plans de traitement personnalisés"
                },
                contouring: {
                    title: "Modelage corporel",
                    desc: "Réduisez la graisse tenace et redessinez votre corps avec la technologie BodyFx. Traitement non invasif qui cible les cellules graisseuses tout en raffermissant la peau.",
                    benefit1: "Réduit la graisse dans les zones ciblées",
                    benefit2: "Raffermit et tonifie la peau",
                    benefit3: "Pas de chirurgie, pas de temps d'arrêt",
                    benefit4: "Résultats visibles en quelques semaines"
                },
                cellulite: {
                    title: "Réduction de la cellulite",
                    desc: "Lissez la cellulite avec la technologie VelaShape III. Ce traitement avancé combine la radiofréquence, la lumière infrarouge et le massage sous vide pour des résultats visibles.",
                    benefit1: "Réduit l'apparence de la cellulite",
                    benefit2: "Améliore la texture de la peau",
                    benefit3: "Non invasif et confortable",
                    benefit4: "Résultats durables"
                },
                tightening: {
                    title: "Raffermissement de la peau",
                    desc: "Raffermissez et tonifiez la peau relâchée avec le microneedling RF Potenza. Ce traitement stimule la production de collagène pour une peau plus ferme et plus jeune.",
                    benefit1: "Raffermit la peau relâchée ou affaissée",
                    benefit2: "Stimule la production de collagène",
                    benefit3: "Améliore l'élasticité de la peau",
                    benefit4: "Convient au corps et au visage"
                }
            },
            wellness: {
                title: "Services de bien-être",
                subtitle: "Soutenez votre santé globale et votre vitalité avec nos traitements de bien-être complets.",
                featured: {
                    title: "Services de bien-être",
                    desc: "Soutenez votre santé globale et votre vitalité avec nos traitements de bien-être complets. De la thérapie IV aux injections de vitamines, nous vous aidons à vous sentir au mieux de l'intérieur.",
                    benefit1: "100% d'absorption des nutriments",
                    benefit2: "Augmente l'énergie et l'immunité",
                    benefit3: "Plans de bien-être personnalisés",
                    benefit4: "Conseils et soutien d'experts"
                },
                iv: {
                    title: "Thérapie IV",
                    desc: "Rechargez votre corps avec des vitamines, minéraux et nutriments essentiels grâce à la thérapie intraveineuse. Mélanges personnalisés pour l'énergie, l'immunité, l'hydratation et plus encore.",
                    benefit1: "100% d'absorption des nutriments",
                    benefit2: "Augmente l'énergie et l'immunité",
                    benefit3: "Améliore l'hydratation",
                    benefit4: "Personnalisé selon vos besoins"
                },
                vitamin: {
                    title: "Injections de vitamines",
                    desc: "Injections rapides et efficaces de vitamine B12 pour augmenter votre énergie, votre métabolisme et votre bien-être global. Parfait pour les modes de vie occupés.",
                    benefit1: "Augmente les niveaux d'énergie",
                    benefit2: "Soutient le métabolisme",
                    benefit3: "Traitement rapide de 5 minutes",
                    benefit4: "Pas de temps d'arrêt requis"
                },
                consult: {
                    title: "Consultation de bien-être",
                    desc: "Évaluation complète du bien-être pour créer un plan personnalisé pour vos objectifs de santé et de vitalité. Nos experts vous guideront vers un bien-être optimal.",
                    benefit1: "Plan de bien-être personnalisé",
                    benefit2: "Conseils et soutien d'experts",
                    benefit3: "Évaluation complète de la santé",
                    benefit4: "Soutien et suivi continus"
                }
            },
            cta: {
                title: "Prêt à commencer votre parcours?",
                desc: "Planifiez une consultation avec notre équipe d'experts pour discuter de vos objectifs et créer un plan de traitement personnalisé.",
                button: "Réserver votre consultation"
            }
        },
        pricing: {
            title: "Tarifs",
            subtitle: "Menu À La Carte",
            cta: "Réserver une consultation",
            contact: "Réserver votre consultation",
            note: "Tous les prix sont sujets à changement. Une consultation est requise pour des plans de traitement personnalisés. Les remises sur forfaits s'appliquent au même type de traitement.",
            promotions: {
                title: "Offres spéciales",
                first: {
                    badge: "NOUVEAU CLIENT",
                    title: "Premier client",
                    desc: "Profitez d'une remise d'introduction spéciale lors de votre première visite"
                },
                three: {
                    badge: "5% DE RÉDUCTION",
                    title: "Forfait 3 séances",
                    desc: "Économisez 5% lors de l'achat de 3 séances"
                },
                six: {
                    badge: "10% DE RÉDUCTION",
                    title: "Forfait 6 séances",
                    desc: "Économisez 10% lors de l'achat de 6 séances"
                }
            },
            injectables: {
                title: "Traitements injectables",
                botox: {
                    title: "Botox",
                    desc: "Par unité"
                },
                dysport: {
                    title: "Dysport",
                    desc: "Par unité"
                },
                filler: {
                    title: "Charge dermique (1ml)",
                    desc: "Juvederm, Restylane ou similaire"
                },
                lip: {
                    title: "Amélioration des lèvres",
                    desc: "0.5ml - 1ml"
                },
                cheek: {
                    title: "Amélioration des joues",
                    desc: "Par seringue"
                },
                consult: {
                    title: "Consultation",
                    desc: "Gratuite avec traitement"
                }
            },
            face: {
                title: "Traitements du visage",
                hydrafacial: {
                    title: "Hydrafacial",
                    desc: "Traitement facial de nettoyage en profondeur"
                },
                chemical: {
                    title: "Peeling chimique",
                    desc: "Profondeur légère à moyenne"
                },
                micro: {
                    title: "Microdermabrasion",
                    desc: "Exfoliation et renouvellement de la peau"
                },
                microneedling: {
                    title: "Microneedling",
                    desc: "Thérapie d'induction du collagène"
                },
                ipl: {
                    title: "Photofacial IPL",
                    desc: "Réduction de la pigmentation et des rougeurs"
                },
                laser: {
                    title: "Resurfaçage au laser",
                    desc: "Traitement laser fractionnel"
                },
                custom: {
                    title: "Soin du visage personnalisé",
                    desc: "Adapté à vos besoins cutanés"
                }
            },
            body: {
                title: "Traitements corporels",
                bodyfx: {
                    title: "BodyFx",
                    desc: "Réduction des graisses et raffermissement de la peau"
                },
                velashape: {
                    title: "VelaShape III",
                    desc: "Réduction de la cellulite"
                },
                potenza: {
                    title: "Microneedling RF Potenza",
                    desc: "Raffermissement de la peau du corps"
                },
                wrap: {
                    title: "Enveloppement corporel",
                    desc: "Détoxifiant et modelant"
                }
            },
            wellness: {
                title: "Bien-être",
                iv: {
                    title: "Thérapie IV",
                    desc: "Thérapie de perfusion de vitamines"
                },
                vitamin: {
                    title: "Injection de vitamine B12",
                    desc: "Boost d'énergie et de métabolisme"
                },
                consult: {
                    title: "Consultation de bien-être",
                    desc: "Évaluation de bien-être personnalisée"
                }
            }
        },
        tips: {
            title: "Conseils de soins de la peau",
            subtitle: "Conseils d'experts pour une peau saine et éclatante",
            readmore: "Lire la suite",
            daily: {
                title: "Routine quotidienne de soins de la peau",
                desc: "Apprenez les étapes essentielles d'une routine quotidienne de soins de la peau qui maintient votre peau saine et radieuse."
            },
            sun: {
                title: "Essentiels de protection solaire",
                desc: "Pourquoi la protection solaire est cruciale et comment choisir le bon FPS pour votre type de peau."
            },
            hydration: {
                title: "Hydratation et votre peau",
                desc: "Découvrez l'importance de l'hydratation pour maintenir une peau saine et jeune."
            },
            aging: {
                title: "Stratégies anti-âge",
                desc: "Stratégies efficaces pour ralentir le processus de vieillissement et maintenir une peau jeune."
            },
            products: {
                title: "Choisir les bons produits",
                desc: "Comment sélectionner des produits de soins de la peau qui fonctionnent le mieux pour votre type de peau unique et vos préoccupations."
            },
            seasonal: {
                title: "Soins de la peau saisonniers",
                desc: "Adaptez votre routine de soins de la peau aux changements de saisons pour des résultats optimaux toute l'année."
            }
        },
        contact: {
            title: "Contactez-nous",
            subtitle: "Nous serions ravis d'avoir de vos nouvelles. Contactez-nous dès aujourd'hui.",
            info: {
                title: "Contactez-nous",
                address: {
                    title: "Adresse"
                },
                hours: {
                    title: "Heures de bureau",
                    text: "Lundi - Vendredi: 9h00 - 17h00<br>Samedi: 10h00 - 14h00<br>Dimanche: Fermé"
                },
                email: {
                    title: "Courriel"
                },
                phone: {
                    title: "Téléphone"
                }
            },
            form: {
                title: "Envoyez-nous un message",
                name: "Nom",
                email: "Courriel",
                phone: "Téléphone",
                subject: "Sujet",
                message: "Message",
                submit: "Envoyer le message"
            },
            map: {
                title: "Trouvez-nous"
            }
        },
        footer: {
            links: {
                title: "Liens rapides"
            },
            contact: {
                title: "Contact"
            },
            rights: "Tous droits réservés."
        }
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else {
                // Handle newlines in translations
                element.textContent = translation.replace(/\\n/g, '\n');
            }
        }
    });
    
    // Translate alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.dataset.i18nAlt;
        const translation = getTranslation(key);
        if (translation) {
            element.alt = translation;
        }
    });
    
    // Translate HTML content (for office hours and other HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.dataset.i18nHtml;
        const translation = getTranslation(key);
        if (translation) {
            element.innerHTML = translation;
        } else {
            // Fallback to English if translation not found
            const englishTranslation = getTranslationForLang(key, 'en');
            if (englishTranslation) {
                element.innerHTML = englishTranslation;
            }
        }
    });
}

function getTranslation(key) {
    return getTranslationForLang(key, currentLang);
}

function getTranslationForLang(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    // Try requested language first
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            value = null;
            break;
        }
    }
    
    // If translation not found and not already English, try English as fallback
    if (!value && lang !== 'en') {
        value = translations.en;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return null;
            }
        }
    }
    
    return typeof value === 'string' ? value : null;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure English is always available as fallback
    if (!translations.en) {
        console.warn('English translations not found - this should not happen');
    }
    
    setLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
