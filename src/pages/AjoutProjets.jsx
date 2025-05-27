// AjoutProjets.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Formik et Yup pour la validation des formulaires
import * as formik from 'formik';
import * as yup from 'yup';
import '../css/AjoutProjets.css';

// https://react-bootstrap.netlify.app/docs/forms/validation/ 

function AjoutProjets({ ajouterProjet }) { // je reçois la fonction en props
  const { Formik } = formik;

  // Avec yup vérifie que chaque champ du formulaire est valide
  const schema = yup.object().shape({
    image: yup.mixed().required('Image requise'),
    titre: yup.string().required('Titre requis'),
    description: yup.string().required('Description requise'),
    dateRealisation: yup.date().required('Date de réalisation requise'),
    technologies: yup.string().required('Technologies requises'),
  });

  // Fonction pour ajouter un projet
  const handleAddProjet = (values, { resetForm }) => {
    // Prend values.image qui est le fichier sélectionné et le transforme en URL
    const imageUrl = values.image ? URL.createObjectURL(values.image) : '';
    ajouterProjet({
      // prend toutes les données du formulaire
      ...values,
      // ajoute l'URL de l'image
      image: imageUrl,
      id: Date.now(), // identifiant unique
    });
    // reset le formulaire après avoir ajouté un projet quelconque 
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleAddProjet}
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
  );
}

export default AjoutProjets;
