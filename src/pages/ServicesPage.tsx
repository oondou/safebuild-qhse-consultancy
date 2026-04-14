import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  DraftingCompass,
  ClipboardCheck,
  ArrowRight,
  AlertTriangle,
  Zap,
  BarChart3,
  Users
} from 'lucide-react';
import RealizationModal from '../components/RealizationModal';

const ServicesPage = () => {
  const [selectedRealization, setSelectedRealization] = useState<string | null>(null);

  const detailedServices = [
    {
      id: 'Audit QHSE',
      title: 'Audit QHSE Complet',
      icon: <ShieldCheck className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      description: 'Service d\'audit complet couvrant les domaines Qualité, Hygiène, Sécurité et Environnement.',
      features: [
        { title: 'Diagnostic Global', desc: 'Analyse complète de 500+ critères d\'évaluation QHSE' },
        { title: 'Conformité Réglementaire', desc: 'Vérification ISO 9001, 45001, 14001 et normes locales' },
        { title: 'Identification Risques', desc: 'Cartographie détaillée des non-conformités et risques' },
        { title: 'Rapport Expert', desc: 'Documentation exhaustive avec recommandations prioritaires' }
      ],
      benefits: [
        'Conformité assurée aux normes internationales',
        'Réduction des risques opérationnels',
        'Amélioration de la culture sécurité',
        'Documentation complète pour certification'
      ],
      process: [
        'Préparation et planning',
        'Audit sur site (2-5 jours)',
        'Entretiens collaborateurs',
        'Rapport synthétique 5 jours après'
      ]
    },
    {
      id: 'Certification & Pilotage',
      title: 'Certification & Pilotage Stratégique',
      icon: <CheckCircle2 className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
      bgGradient: 'from-emerald-500/10 to-emerald-600/5',
      description: 'Accompagnement intégral pour obtenir et maintenir vos certifications ISO.',
      features: [
        { title: 'Coaching Certification', desc: 'Préparation méthodique à la certification ISO' },
        { title: 'Support Auditeur', desc: 'Présence expert lors de l\'audit externe' },
        { title: 'Pilotage Continu', desc: 'Tableau de bord KPI et amélioration continue' },
        { title: 'Renouvellement', desc: 'Gestion des cycles de re-certification' }
      ],
      benefits: [
        'Certification obtenue du premier coup (98% taux)',
        'Maintien certifications years après',
        'Conformité permanente documentée',
        'Avantage compétitif certifié'
      ],
      process: [
        'Évaluation écarts actuels',
        'Plan d\'action personnalisé',
        'Implémentation par notre équipe',
        'Audit blanc pré-certification'
      ]
    },
    {
      id: 'Accompagnement Expert',
      title: 'Accompagnement & Formation Expert',
      icon: <DraftingCompass className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-purple-600 to-purple-400',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      description: 'Support opérationnel complet avec formation et implémentation de systèmes QHSE.',
      features: [
        { title: 'Formation Equipes', desc: 'Programme complet pour 50 à 5000+ collaborateurs' },
        { title: 'Implémentation', desc: 'Déploiement des systèmes QHSE et procédures' },
        { title: 'Support Opérationnel', desc: 'Présence expert sur sites pendant 3-12 mois' },
        { title: 'Plateforme Digitale', desc: 'E-learning et système de gestion QHSE intégré' }
      ],
      benefits: [
        'Culture sécurité transformée',
        'Équipes formées et autonomes',
        'Réduction sinistralité > 70%',
        'Système pérenne et documenté'
      ],
      process: [
        'Diagnostic initial',
        'Design curriculum formation',
        'Déploiement progressif',
        'Monitoring et support continu'
      ]
    },
    {
      id: 'Gestion des Risques',
      title: 'Gestion Avancée des Risques',
      icon: <ClipboardCheck className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-rose-600 to-rose-400',
      bgGradient: 'from-rose-500/10 to-rose-600/5',
      description: 'Évaluation exhaustive et stratégie de mitigation des risques professionnels.',
      features: [
        { title: 'Risques Professionnels', desc: 'Cartographie travail, machines, produits chimiques' },
        { title: 'Risques Environnement', desc: 'Impacts carbone, eau, déchets et pollution' },
        { title: 'Risques Opérationnels', desc: 'Continuité, terrorisme, sécurité physique' },
        { title: 'Plans d\'Action', desc: 'Stratégies de mitigation et hiérarchisation' }
      ],
      benefits: [
        'Risques majeurs identifiés et maîtrisés',
        'Plans d\'action priorisés et budgétés',
        'Assurance et couverture optimisées',
        'Conformité réglementaire maximalisée'
      ],
      process: [
        'Évaluation exhaustive 2-4 semaines',
        'Cartographie des risques',
        'Hiérarchisation criticité',
        'Plans mitigation détaillés'
      ]
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
      {/* Header */}
      <section className="py-16 border-b border-blue-400/10">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">
              Nos Services <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Détaillés</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Une expertise complète adaptée à chaque phase de votre parcours QHSE, de l'audit initial à la certification stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {detailedServices.map((service, serviceIdx) => (
        <section key={service.id} className={`py-24 ${serviceIdx % 2 === 0 ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-slate-900/50'} border-b border-blue-400/10`}>
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-4 rounded-xl ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-extrabold text-white">{service.title}</h2>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-sm uppercase font-bold text-blue-400 tracking-widest">Caractéristiques</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Zap className="w-5 h-5 text-emerald-400 mt-1" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedRealization(service.id)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-8 py-4 rounded-xl font-bold transition-all text-lg"
                >
                  Voir Nos Réalisations
                  <ArrowRight size={20} />
                </button>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Benefits */}
                <div className={`bg-gradient-to-br ${service.bgGradient} border border-blue-400/20 rounded-2xl p-8`}>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-emerald-400" />
                    Bénéfices
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className={`bg-gradient-to-br ${service.bgGradient} border border-blue-400/20 rounded-2xl p-8`}>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    Notre Processus
                  </h3>
                  <div className="space-y-3">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="pt-1">
                          <p className="text-gray-300 font-medium">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-emerald-400/30 rounded-2xl p-8">
                  <AlertTriangle className="w-6 h-6 text-emerald-400 mb-3" />
                  <p className="text-white font-semibold mb-2">ROI Clair Mesuré</p>
                  <p className="text-gray-300 text-sm">Chaque engagement SafeBuild produit des résultats documentés : certifications obtenues, conformité validée, et réductions des incidents.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-extrabold text-white text-center">Comparatif Complet des Services</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-blue-400/20">
                    <th className="text-left py-4 px-6 text-gray-400 font-bold uppercase text-xs">Service</th>
                    <th className="text-center py-4 px-6 text-blue-400 font-bold uppercase text-xs">Durée</th>
                    <th className="text-center py-4 px-6 text-emerald-400 font-bold uppercase text-xs">Budget</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-bold uppercase text-xs">Certification</th>
                    <th className="text-center py-4 px-6 text-rose-400 font-bold uppercase text-xs">Équipe</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Audit QHSE', duree: '2-5 jours', budget: '3-8K€', cert: 'Non', equipe: '2-3' },
                    { service: 'Certification & Pilotage', duree: '6-12 mois', budget: '15-40K€', cert: 'OUI', equipe: '2-5' },
                    { service: 'Accompagnement Expert', duree: '3-12 mois', budget: '30-100K€', cert: 'OUI', equipe: '3-6' },
                    { service: 'Gestion des Risques', duree: '2-4 semaines', budget: '5-15K€', cert: 'Non', equipe: '1-2' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-blue-400/10 hover:bg-blue-400/5 transition-colors">
                      <td className="py-4 px-6 text-white font-semibold">{row.service}</td>
                      <td className="text-center py-4 px-6 text-gray-400">{row.duree}</td>
                      <td className="text-center py-4 px-6 text-emerald-400 font-semibold">{row.budget}</td>
                      <td className="text-center py-4 px-6">
                        {row.cert === 'OUI' ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-bold"><CheckCircle2 size={16} /> Oui</span>
                        ) : (
                          <span className="text-gray-500">Non</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-400">{row.equipe} experts</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-t border-blue-400/20">
        <div className="max-w-screen-xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur rounded-3xl p-12 md:p-20 text-center border border-blue-400/20 space-y-8"
          >
            <h2 className="text-4xl font-extrabold text-white">Trouvez le Service Idéal pour Vos Besoins</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Nos experts sont disponibles pour une consultation gratuite. Parlons de votre contexte spécifique.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:safebuildqhse@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-10 py-5 rounded-xl font-bold transition-all text-lg"
              >
                Demander une Consultation
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+221768641810"
                className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-blue-400 px-10 py-5 rounded-xl font-bold transition-all text-lg border border-blue-400/30"
              >
                Appeler Nos Experts
              </a>
            </div>
          </motion.div>
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
            description: detailedServices.find(s => s.id === selectedRealization)?.description || '',
            color: detailedServices.find(s => s.id === selectedRealization)?.color || ''
          }}
        />
      )}
    </div>
  );
};

export default ServicesPage;
