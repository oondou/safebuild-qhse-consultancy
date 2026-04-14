import React from 'react';
import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface RealizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  };
}

const RealizationModal: React.FC<RealizationModalProps> = ({ isOpen, onClose, title, data }) => {
  const realizations: Record<string, any[]> = {
    'Audit QHSE': [
      {
        project: 'Usine Métallurgique Santos',
        result: 'Certification ISO 9001 obtenue en 6 mois',
        details: 'Audit complet de 500 postes de travail avec identification de 127 écarts réglementaires'
      },
      {
        project: 'Fabrique Textile Dakar',
        result: '0 incident critique après 18 mois',
        details: 'Implémentation d\'un système de gestion des risques chimiques avancé'
      },
      {
        project: 'Site de Traitement Déchets',
        result: 'Conformité 100% sur audit interne',
        details: 'Restructuration complète des protocoles de sécurité biosafety'
      }
    ],
    'Certification & Pilotage': [
      {
        project: 'Groupe Logistique Express',
        result: 'ISO 45001 + ISO 14001 - Certification double',
        details: 'Accompagnement de 2 ans pour la mise en place de système intégré'
      },
      {
        project: 'Entreprise Génie Civil BTP',
        result: 'Audit certification réussi du premier coup',
        details: '100% conformité avec 0 non-conformité majeure identifiée'
      },
      {
        project: 'Industrie Pharmaceutique',
        result: 'Conformité GMP + ISO 45001 simultanées',
        details: 'Coordination complète avec organismes de certification externes'
      }
    ],
    'Accompagnement Expert': [
      {
        project: 'Refonte QHSE Usine Agro-alimentaire',
        result: 'Réduction sinistralité de 78% en 18 mois',
        details: 'Formation de 350 collaborateurs et mise en place de KPI avancés'
      },
      {
        project: 'Modernisation Système Minier',
        result: 'Transition réglementaire réussie',
        details: 'Adaptation complète aux nouvelles normes internationales d\'extraction'
      },
      {
        project: 'Transition Digitale HSE',
        result: 'Plateforme e-learning composée de 45 modules',
        details: 'Intégration d\'outils collaboratifs pour 2000+ utilisateurs'
      }
    ],
    'Gestion des Risques': [
      {
        project: 'Analyse Risques Chimiques Avancée',
        result: 'Répertoire toxicologique complet de 340 produits',
        details: 'Cartographie ATEX + études de danger complètes'
      },
      {
        project: 'Évaluation Terrorisme & Sécurité Physique',
        result: 'Plan de continuité opérationnelle certifié',
        details: 'Scénarios de crise validés par experts en sécurité'
      },
      {
        project: 'Matrice de Risques Multi-niveaux',
        result: 'Système de notation automatisé intégré',
        details: 'Tableau de bord temps réel avec alertes intelligentes'
      }
    ]
  };

  const items = realizations[title] || [];

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-blue-400/20"
      >
        <div className={`sticky top-0 ${data.color} text-white p-8 flex justify-between items-start`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              {data.icon}
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <p className="text-white/80">{data.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-6">
            Nos Réalisations Marquantes
          </div>
          
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-700/50 border border-blue-400/10 rounded-xl p-6 hover:border-blue-400/30 transition-all"
            >
              <h4 className="font-bold text-blue-400 mb-2 text-lg flex items-center gap-2">
                <ArrowRight size={18} />
                {item.project}
              </h4>
              <p className="text-emerald-400 font-semibold mb-3">{item.result}</p>
              <p className="text-gray-300 text-sm">{item.details}</p>
            </motion.div>
          ))}

          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-400/20 rounded-xl p-6 mt-8">
            <p className="text-gray-200 mb-4">Intéressé par un accompagnement similaire pour votre organisation ?</p>
            <a
              href="mailto:safebuildqhse@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Demander une Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RealizationModal;
