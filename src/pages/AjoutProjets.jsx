// Jai pris un componenet de react-bootstrap et je lai adapte pour mon projet
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Formik et Yup pour la validation des formulaires
import * as formik from 'formik';
import * as yup from 'yup';
import '../css/AjoutProjets.css';

// Composant ProjetInfo pour afficher les projets ajoutes
import ProjetInfo from '../BootstrapComponents/ProjetInfo';

// https://react-bootstrap.netlify.app/docs/forms/validation/ 

function AjoutProjets() {
  const { Formik } = formik;
  // liste vide pour y mettre les projets
  const [projets, setProjets] = useState([]);

  // Avec yup verifie que chaque champ du formulaire est valide
  const schema = yup.object().shape({
    image: yup.mixed().required('Image requise'),
    titre: yup.string().required('Titre requis'),
    description: yup.string().required('Description requise'),
    dateRealisation: yup.date().required('Date de réalisation requise'),    technologies: yup.string().required('Technologies requises'),
  });

  // Fonction pour ajouter un projet
// https://developer.mozilla.org/fr/docs/Web/API/URL/createObjectURL_static ( pas mon code )
  const handleAddProjet = (values, { resetForm }) => {
    // Prend values.image qui est le fichier selectionne et le transforme en URL pour eviter davoir a etre envoyee sur un server
    const imageUrl = values.image ? URL.createObjectURL(values.image) : '';
    setProjets([
      // copie les anciens projets
      ...projets,
      {
        // prend toutes le donnes du forumlaire
        ...values,
        // ajoute l'URL de l'image
        image: imageUrl,
        id: Date.now(),
      },
    ]);
    // reset le forumlaire apres avoir ajoute un projet quelquonque 
    resetForm();
  };

  return (
    <div>
      <Formik

        validationSchema={schema}
        // appele la fonction handleAddProjet quand le formulaire est soumis
        onSubmit={handleAddProjet}
        // valeurs initiales du formulaire
        initialValues={{
          image: null,
          titre: '',
          description: '',
          dateRealisation: '',
          technologies: '',
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
          <Form className="formik-ajout-projet" noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={e => setFieldValue('image', e.currentTarget.files[0])}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titre : </Form.Label>
              <Form.Control
                type="text"
                name="titre"
                value={values.titre}
                onChange={handleChange}
                isInvalid={!!errors.titre}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.titre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>


                <Form.Group className="mb-3">
              <Form.Label>Technologies / Langages</Form.Label>
              <Form.Control
                type="text"
                name="technologies"
                value={values.technologies}
                onChange={handleChange}
                isInvalid={!!errors.technologies}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.technologies}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Date de réalisation</Form.Label>
              <Form.Control
                type="date"
                name="dateRealisation"
                value={values.dateRealisation}
                onChange={handleChange}
                isInvalid={!!errors.dateRealisation}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.dateRealisation}
              </Form.Control.Feedback>
            </Form.Group>


            <Button type="submit">Ajouter le projet</Button>
          </Form>
        )}
      </Formik>
      // ajoute dynamique les projets ajoutes
      <div className="projet-container">
        {projets.map(projet => (
          <ProjetInfo
            key={projet.id}
            image={projet.image}
            titre={projet.titre}
            description={projet.description}
            dateRealisation={projet.dateRealisation}
            technologies={projet.technologies || ''}
          />
        ))}
      </div>
    </div>
  );
}

export default AjoutProjets;