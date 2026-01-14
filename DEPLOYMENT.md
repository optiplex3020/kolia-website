# Guide de Déploiement KOLIA sur Vercel

## Étapes de Déploiement

### 1. Connexion à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New" → "Project"

### 2. Import du Repository

1. Sélectionnez le repository `optiplex3020/kolia-website`
2. Vercel détectera automatiquement qu'il s'agit d'un projet Next.js
3. Laissez les paramètres par défaut :
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 3. Configuration du Domaine (Optionnel)

Pour utiliser un domaine personnalisé :

1. Dans les paramètres du projet Vercel, allez dans "Domains"
2. Ajoutez votre domaine (ex: `kolia.fr`)
3. Configurez les DNS selon les instructions de Vercel :
   - **Type A** : `76.76.21.21`
   - **CNAME** : `cname.vercel-dns.com`

### 4. Variables d'Environnement (Phase 2)

Actuellement, aucune variable n'est nécessaire. Pour les futures phases :

1. Allez dans "Settings" → "Environment Variables"
2. Ajoutez les variables du fichier `.env.example`

## Build & Déploiement Automatique

Une fois configuré, Vercel déploiera automatiquement :
- **Main branch** → Production (kolia.fr)
- **Autres branches** → Preview deployments

Chaque push sur `main` déclenche un nouveau déploiement.

## Vérifications Post-Déploiement

### ✓ Checklist

- [ ] Homepage s'affiche correctement
- [ ] Navigation fonctionne (toutes les pages)
- [ ] Animations sont fluides
- [ ] Mobile responsive fonctionne
- [ ] Fonts se chargent correctement
- [ ] Performance Lighthouse > 90

### URLs à tester

- `/` - Homepage
- `/univers` - L'Univers Kolia
- `/la-box` - La Box du mois
- `/sabonner` - Formules d'abonnement
- `/collections` - Archive des collections
- `/journal` - Blog/Journal

## Dépannage: 404 NOT_FOUND / builder Next.js

Si Vercel affiche `404: NOT_FOUND` malgré un build OK, vérifiez que le projet n'est pas en **Framework Preset: Other**.

Ce repo inclut `vercel.json` pour forcer l'utilisation du builder `@vercel/next` (source: `package.json`). Si vous aviez
un preset incorrect auparavant, repassez le preset sur **Next.js** puis redeployez.

## Optimisations Automatiques de Vercel

Vercel applique automatiquement :
- Compression Gzip/Brotli
- Cache CDN global
- Image optimization
- Edge Functions
- Analytics (si activé)

## Monitoring

### Performance

1. Activez Vercel Analytics dans les paramètres
2. Surveillez les Core Web Vitals :
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

### Logs

- Les logs sont disponibles dans l'onglet "Logs" du projet
- Consultez-les en cas d'erreur

## Rollback

En cas de problème :

1. Allez dans "Deployments"
2. Sélectionnez un déploiement précédent
3. Cliquez sur "Promote to Production"

## Support

Pour toute question :
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Vercel : [vercel.com/support](https://vercel.com/support)

---

## Commandes Utiles

```bash
# Tester le build localement
npm run build
npm start

# Déployer via CLI (optionnel)
npm install -g vercel
vercel --prod
```

## Prochaines Étapes (Phase 2)

- [ ] Configurer Stripe pour les paiements
- [ ] Intégrer un CMS (Sanity.io)
- [ ] Ajouter les vraies images de la box
- [ ] Configurer les emails transactionnels
- [ ] Analytics avancés (Plausible/Fathom)
- [ ] Tests automatisés (Playwright)

---

Bon déploiement ! 🚀
