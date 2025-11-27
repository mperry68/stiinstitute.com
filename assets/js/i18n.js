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
        features: {
            injectables: {
                title: "Injectables",
                link: "Discover our injectable treatments."
            },
            face: {
                title: "Face",
                link: "Discover our face treatments."
            },
            body: {
                title: "Body",
                link: "Discover our body treatments."
            },
            wellness: {
                title: "Wellness",
                link: "Discover our wellness treatments."
            }
        },
        about: {
            title: "About Skin Technologies Institute",
            mission: {
                title: "Our Mission",
                text: "At Skin Technologies Institute, we are committed to providing the highest quality professional skin care services. Our mission is to help you achieve natural, beautiful results that enhance your unique features."
            },
            values: {
                title: "Our Values",
                excellence: "Excellence in every treatment",
                integrity: "Integrity and professionalism",
                innovation: "Innovation in skin care techniques",
                community: "Building lasting relationships with our clients"
            },
            history: {
                title: "Our Story",
                text: "Founded with a passion for excellence in skin care, Skin Technologies Institute has been a trusted name in professional treatments. Located in Beaconsfield, Quebec, we serve clients from across the region with personalized care and attention."
            },
            image: {
                alt: "STI Institute"
            }
        },
        services: {
            title: "Our Services",
            injectables: {
                title: "Injectables",
                desc: "Professional injectable treatments to enhance your natural beauty and address specific concerns.",
                item1: "Botox & Dermal Fillers",
                item2: "Lip Enhancements",
                item3: "Wrinkle Reduction",
                item4: "Facial Contouring"
            },
            face: {
                title: "Face Treatments",
                desc: "Comprehensive facial treatments designed to rejuvenate, hydrate, and restore your skin's natural glow.",
                item1: "Hydrafacial",
                item2: "Chemical Peels",
                item3: "Microdermabrasion",
                item4: "Custom Facials"
            },
            body: {
                title: "Body Treatments",
                desc: "Advanced body contouring and treatment options to help you achieve your wellness goals.",
                item1: "Body Contouring",
                item2: "Cellulite Reduction",
                item3: "Skin Tightening",
                item4: "Body Wraps"
            },
            wellness: {
                title: "Wellness",
                desc: "Holistic wellness treatments to support your overall health and vitality.",
                item1: "IV Therapy",
                item2: "Vitamin Injections",
                item3: "Wellness Consultations",
                item4: "Nutritional Support"
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
        features: {
            injectables: {
                title: "Injectables",
                link: "Découvrez nos traitements injectables."
            },
            face: {
                title: "Visage",
                link: "Découvrez nos traitements du visage."
            },
            body: {
                title: "Corps",
                link: "Découvrez nos traitements corporels."
            },
            wellness: {
                title: "Bien-être",
                link: "Découvrez nos traitements de bien-être."
            }
        },
        about: {
            title: "À propos de l'Institut des Technologies de la Peau",
            mission: {
                title: "Notre mission",
                text: "À l'Institut des Technologies de la Peau, nous nous engageons à fournir des services professionnels de soins de la peau de la plus haute qualité. Notre mission est de vous aider à obtenir des résultats naturels et beaux qui mettent en valeur vos caractéristiques uniques."
            },
            values: {
                title: "Nos valeurs",
                excellence: "Excellence dans chaque traitement",
                integrity: "Intégrité et professionnalisme",
                innovation: "Innovation dans les techniques de soins de la peau",
                community: "Construire des relations durables avec nos clients"
            },
            history: {
                title: "Notre histoire",
                text: "Fondé avec une passion pour l'excellence en soins de la peau, l'Institut des Technologies de la Peau est un nom de confiance en traitements professionnels. Situé à Beaconsfield, Québec, nous servons des clients de toute la région avec des soins et une attention personnalisés."
            },
            image: {
                alt: "Institut STI"
            }
        },
        services: {
            title: "Nos services",
            injectables: {
                title: "Injectables",
                desc: "Traitements injectables professionnels pour améliorer votre beauté naturelle et répondre à des préoccupations spécifiques.",
                item1: "Botox et charges dermiques",
                item2: "Amélioration des lèvres",
                item3: "Réduction des rides",
                item4: "Contour du visage"
            },
            face: {
                title: "Traitements du visage",
                desc: "Traitements faciaux complets conçus pour rajeunir, hydrater et restaurer l'éclat naturel de votre peau.",
                item1: "Hydrafacial",
                item2: "Peelings chimiques",
                item3: "Microdermabrasion",
                item4: "Soins du visage personnalisés"
            },
            body: {
                title: "Traitements corporels",
                desc: "Options avancées de modelage corporel et de traitement pour vous aider à atteindre vos objectifs de bien-être.",
                item1: "Modelage corporel",
                item2: "Réduction de la cellulite",
                item3: "Raffermissement de la peau",
                item4: "Enveloppements corporels"
            },
            wellness: {
                title: "Bien-être",
                desc: "Traitements de bien-être holistiques pour soutenir votre santé globale et votre vitalité.",
                item1: "Thérapie IV",
                item2: "Injections de vitamines",
                item3: "Consultations de bien-être",
                item4: "Soutien nutritionnel"
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
    
    // Translate HTML content (for office hours)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.dataset.i18nHtml;
        const translation = getTranslation(key);
        if (translation) {
            element.innerHTML = translation;
        }
    });
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    // Try current language first
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            value = null;
            break;
        }
    }
    
    // If translation not found and not already English, try English as fallback
    if (!value && currentLang !== 'en') {
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
