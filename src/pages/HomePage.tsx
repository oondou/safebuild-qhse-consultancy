import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Gavel,
  Verified,
  DraftingCompass,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import RealizationModal from '../components/RealizationModal';

const HomePage = () => {
  const [selectedRealization, setSelectedRealization] = useState<string | null>(null);

  const services = [
    {
      id: 'Audit QHSE',
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Audit QHSE",
      description: "Diagnostic complet de vos systèmes de management qualité, hygiène, sécurité et environnement. Nous identifions les écarts réglementaires et proposons des solutions structurées.",
      color: "bg-gradient-to-br from-blue-600 to-blue-400",
      colorBg: "from-blue-500/10"
    },
    {
      id: 'Certification & Pilotage',
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Certification & Pilotage",
      description: "Accompagnement stratégique pour l'obtention et le maintien de vos certifications ISO 9001, 14001, 45001. Support intégral jusqu'à l'audit externe.",
      color: "bg-gradient-to-br from-emerald-600 to-emerald-400",
      colorBg: "from-emerald-500/10"
    },
    {
      id: 'Accompagnement Expert',
      icon: <DraftingCompass className="w-8 h-8" />,
      title: "Accompagnement Expert",
      description: "Formation, implémentation et pilotage des systèmes QHSE. Nos experts interviennent directement sur vos sites pour assurer l'excellence opérationnelle.",
      color: "bg-gradient-to-br from-purple-600 to-purple-400",
      colorBg: "from-purple-500/10"
    },
    {
      id: 'Gestion des Risques',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Gestion des Risques",
      description: "Évaluation approfondie des risques professionnels, chimiques, environnementaux et opérationnels. Cartographie et stratégies de mitigation personnalisées.",
      color: "bg-gradient-to-br from-rose-600 to-rose-400",
      colorBg: "from-rose-500/10"
    }
  ];

  const successStories = [
    {
      company: 'Raffinerie Sénégalaise',
      challenge: 'Non-conformité critique ISO 45001',
      result: 'Certification obtenue en 8 mois',
      improvement: '+85% conformité réglementaire',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
    },
    {
      company: 'Réseau Distribution Électrique',
      challenge: 'Risques élevés d\'accidents d\'électrocution',
      result: '0 incident grave en 3 ans',
      improvement: '78% réduction sinistralité',
      icon: <Sparkles className="w-6 h-6 text-blue-400" />
    },
    {
      company: 'Groupe Logistique Pan-africain',
      challenge: 'Systèmes QHSE fragmentés',
      result: 'Plateforme intégrée déployée',
      improvement: '2000+ utilisateurs formés',
      icon: <Users className="w-6 h-6 text-purple-400" />
    }
  ];

  const iconMap: Record<string, React.ReactNode> = {
    'Audit QHSE': <ShieldCheck className="w-8 h-8" />,
    'Certification & Pilotage': <CheckCircle2 className="w-8 h-8" />,
    'Accompagnement Expert': <DraftingCompass className="w-8 h-8" />,
    'Gestion des Risques': <ClipboardCheck className="w-8 h-8" />
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-slate-950 to-slate-950"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Elite QHSE Consultancy
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-none">
              Vers <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">L'EXCELLENCE</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
              Consultancy QHSE premium dédiée à transformer vos standards de sécurité. Audits rigoureux, certifications obtenues, pilotage stratégique.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-blue-500/50 transition-all">
                Démarrez Maintenant
                <ArrowRight size={20} />
              </a>
              <button className="bg-slate-800 text-blue-400 px-8 py-4 rounded-xl font-bold text-lg border border-blue-400/30 hover:bg-slate-700 transition-all">
                Nos Services
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div><div className="text-3xl font-bold text-blue-400">500+</div><div className="text-sm text-gray-400">Audits Réalisés</div></div>
              <div><div className="text-3xl font-bold text-emerald-400">98%</div><div className="text-sm text-gray-400">Taux Certification</div></div>
              <div><div className="text-3xl font-bold text-purple-400">15+</div><div className="text-sm text-gray-400">Ans d'Expertise</div></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-emerald-600/30 rounded-3xl blur-2xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnH8bIXkokAvlEjbHIjpSM2N08CyBBXSQiayDAxQ-P2pX33XMfAoZJKePKYRWHxQnNBUrrvEaUOquukUqPsEupNI4ot3VSnC23YwhI4IRVxEfGB2lSQcfX9qBF1S67sHfRgAKSIiOjsVsPXpttLQu1tvbHSmEAluTRQ8YRm06NwmcOehPWWFRIu21LRTiMYMpYTtEaV7rWnHfAzCkq0pi4ECdJJswpB8N1FJBmieF6ifMQjcDVphn510C1xHLh6K5Sj314YGpPT8I"
                alt="Consultancy"
                className="relative rounded-3xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50 border-y border-blue-400/10">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Nos Services Premium</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mt-4"></div>
            </div>
            <p className="text-gray-400 max-w-xl font-medium">SafeBuild propose une expertise complète en QHSE, couvrant audit, certification, accompagnement et gestion des risques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-blue-400/10 rounded-2xl p-8 hover:border-emerald-400/30 transition-all group"
              >
                <div className={`inline-flex p-4 rounded-xl ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>

                <button
                  onClick={() => setSelectedRealization(service.id)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 hover:from-blue-500/40 hover:to-emerald-500/40 text-blue-300 px-6 py-3 rounded-lg font-bold transition-all border border-blue-400/30 hover:border-blue-400/60"
                >
                  Nos Réalisations
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-blue-400/10">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-12">Notre Méthodologie en 4 Étapes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Diagnostic Stratégique',
                desc: 'Analyse approfondie de vos systèmes QHSE actuels vs normes internationales'
              },
              {
                num: '02',
                title: 'Design Structuré',
                desc: 'Développement d\'un roadmap personnalisé aligné avec vos objectifs'
              },
              {
                num: '03',
                title: 'Implémentation Complète',
                desc: 'Déploiement des systèmes avec formation et support opérationnel'
              },
              {
                num: '04',
                title: 'Audit & Certification',
                desc: 'Support complet jusqu\'à la certification et amélioration continue'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-blue-400/10 rounded-xl p-6 hover:border-blue-400/30 transition-all relative group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-white mt-4 mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">Nos Succès Récents</h2>
            <p className="text-gray-400 max-w-2xl">Des résultats concrets qui témoignent de notre expertise et de notre engagement envers l'excellence QHSE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-400/10 rounded-xl p-8 hover:border-blue-400/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  {story.icon}
                  <h4 className="font-bold text-white text-lg">{story.company}</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 mb-1">Défi</p>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-blue-400 mb-1">Solution</p>
                    <p className="text-gray-200 font-semibold">{story.result}</p>
                  </div>
                  <div className="pt-4 border-t border-blue-400/10">
                    <p className="text-xs uppercase font-bold text-emerald-400 mb-1">Amélioration</p>
                    <p className="text-white font-bold">{story.improvement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-y border-blue-400/20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-blue-400/20">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                <Verified size={14} />
                Consultancy Premium
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Prêt à transformer votre QHSE ?</h2>
              <p className="text-gray-400 text-lg font-medium">Demandez une consultation gratuite et découvrez comment SafeBuild peut vous guider vers l'excellence de la certification.</p>
            </div>
            <a
              href="mailto:safebuildqhse@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-blue-500/50 transition-all whitespace-nowrap"
            >
              Consulter nos Experts
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Realization Modal */}
      {selectedRealization && (
        <RealizationModal
          isOpen={!!selectedRealization}
          onClose={() => setSelectedRealization(null)}
          title={selectedRealization}
          data={{
            icon: iconMap[selectedRealization],
            title: selectedRealization,
            description: services.find(s => s.id === selectedRealization)?.description || '',
            color: services.find(s => s.id === selectedRealization)?.color || ''
          }}
        />
      )}
    </div>
  );
};

export default HomePage;
