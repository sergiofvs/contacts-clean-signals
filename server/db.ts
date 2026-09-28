export const ENDPOINTS = [
  {
    url: '/contacts',
    description: 'Get all contacts',
    method: 'GET',
  },
  {
    url: '/contacts/:id',
    description: 'Get contact by ID',
    method: 'GET',
  },
  {
    url: '/contacts',
    description: 'Create a new contact',
    method: 'POST',
  },
  {
    url: '/contacts/:id',
    description: 'Update a contact',
    method: 'PUT',
  },
  {
    url: '/contacts/:id',
    description: 'Delete a contact',
    method: 'DELETE',
  }
];

import { v5 as uuidv5 } from 'uuid';

const CONTACT_NAMESPACE = '1a5eb000-304f-4d8e-b0e8-5bdacaa46c92';

export const CONTACTS = [
  {
    codigo_contato: '1a5eb000-304f-4d8e-b0e8-5bdacaa46c92',
    nome_contato: 'Pai',
    foto_url: 'https://i.pravatar.cc/300?img=12',
    opcoes_contato: [
      {
        id: 'f6e19b82-639b-448d-ae0f-c2c620ba49f5',
        tipo: 'CELULAR',
        valor: '+5511912345678',
        ativo: true,
      },
      {
        id: 'd9b8152f-e525-472d-b79c-9d89c95964a8',
        tipo: 'EMAIL',
        valor: 'sergiosantos@outlook.com',
        ativo: true,
      },
      {
        id: 'ba4551f4-bb8a-4f14-98c8-9ff4e141b49a',
        tipo: 'WHATSAPP',
        valor: '+5511912345678',
        ativo: true,
      }
    ]
  },
  {
    codigo_contato: '29f35fad-9ae1-4d01-b194-1cbb8e689963',
    nome_contato: 'Mãe',
    foto_url: 'https://i.pravatar.cc/300?img=47',
    opcoes_contato: [
      {
        id: 'e889c600-0b45-4e21-a238-ad7c27a75a6e',
        tipo: 'CELULAR',
        valor: '+5511923456789',
        ativo: true,
      },
      {
        id: '523cbf3b-7fbd-4f61-b5bf-81b6bda87b23',
        tipo: 'EMAIL',
        valor: 'katiavale@outlook.com',
        ativo: true,
      },
      {
        id: '0952bf3b-cb66-489d-9754-8921d5a419bd',
        tipo: 'TELEFONE',
        valor: '+551132345678',
        ativo: true,
      }
    ]
  },
  {
    codigo_contato: 'cd1c3b27-8a4c-49ea-8094-bfccfaa5a74c',
    nome_contato: 'Irmã',
    foto_url: 'https://i.pravatar.cc/300?img=32',
    opcoes_contato: [
      {
        id: 'a8b4dfb7-f141-4cb4-81e0-9c6e0444ccdd',
        tipo: 'CELULAR',
        valor: '+5511934567890',
        ativo: true,
      },
      {
        id: '1419f234-d0a9-4103-8ce2-287994e13688',
        tipo: 'EMAIL',
        valor: 'irma@example.com',
        ativo: true,
      },
      {
        id: '4630e5e9-9bbc-4432-9cbe-4397d7470bc0',
        tipo: 'WHATSAPP',
        valor: '+5511934567890',
        ativo: true,
      }
    ]
  },
  {
    codigo_contato: 'b08bb0a5-0d0f-4fea-bd33-5f1b1b998199',
    nome_contato: 'Amigo',
    foto_url: 'https://i.pravatar.cc/300?img=68',
    opcoes_contato: [
      {
        id: '37596ef9-d79e-405d-abed-3c5e9cfa0436',
        tipo: 'TELEFONE',
        valor: '+551134567890',
        ativo: true,
      },
      {
        id: 'a11d4774-6f7d-4bde-a7ea-a16fc48c3a1c',
        tipo: 'EMAIL',
        valor: 'amigo@example.com',
        ativo: true,
      },
      {
        id: 'd243de4b-2e5a-4dd9-9be7-3193a5b3217d',
        tipo: 'WHATSAPP',
        valor: '+551134567890',
        ativo: true,
      }
    ]
  },
  ...Array.from({ length: 46 }, (_, index) => {
    const contactNumber = index + 5;
    const contactId = uuidv5(`contact-${contactNumber}`, CONTACT_NAMESPACE);
    const phone = `+5511999${String(contactNumber).padStart(6, '0')}`;

    return {
      codigo_contato: contactId,
      nome_contato: `Contato ${String(contactNumber).padStart(2, '0')}`,
      foto_url: `https://i.pravatar.cc/300?img=${(contactNumber % 70) + 1}`,
      opcoes_contato: [
        {
          id: uuidv5(`contact-${contactNumber}-celular`, CONTACT_NAMESPACE),
          tipo: 'CELULAR',
          valor: phone,
          ativo: true,
        },
        {
          id: uuidv5(`contact-${contactNumber}-email`, CONTACT_NAMESPACE),
          tipo: 'EMAIL',
          valor: `contato${contactNumber}@example.com`,
          ativo: true,
        }
      ]
    };
  })
];
