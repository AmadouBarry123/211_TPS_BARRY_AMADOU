import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
//https://react-bootstrap.netlify.app/docs/forms/validation/

// Jai pris le code de bootstrap mais je lai modifie pour quil soit comme je veux 


function AjoutProjets() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    image: yup.mixed().required('Image requise'),
    titre: yup.string().required('Titre requis'),
    description: yup.string().required('Description requise'),
    dateRealisation: yup.date().required('Date de réalisation requise'),
  });

  return (
    <Formik style={{ paddingtop: '20px' }}
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        image: null,
        titre: '',
        description: '',
        dateRealisation: '',
      }}
    >
      {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
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
            <Form.Label>Titre</Form.Label>
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
