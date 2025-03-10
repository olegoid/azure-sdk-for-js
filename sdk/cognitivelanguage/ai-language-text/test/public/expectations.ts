// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeBatchResult,
  EntityLinkingResult,
  EntityRecognitionResult,
  KeyPhraseExtractionResult,
  KnownErrorCode,
  LanguageDetectionResult,
  PiiEntityRecognitionResult,
  PiiEntityRecognitionSuccessResult,
  SentimentAnalysisResult,
} from "../../src/";

const failedOn = undefined as any;
const modelVersion = undefined as any;
const completedOn = undefined as any;
const deploymentName = undefined as any;
const projectName = undefined as any;

export const expectation1: AnalyzeBatchResult[] = [
  {
    kind: "CustomEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [
          {
            text: "Casey Jensen",
            category: "BorrowerName",
            offset: 138,
            length: 12,
            confidenceScore: 0.99,
          },
          {
            text: "2469 Pennsylvania Avenue",
            category: "BorrowerAddress",
            offset: 177,
            length: 24,
            confidenceScore: 0.97,
          },
          {
            text: "New",
            category: "BorrowerState",
            offset: 211,
            length: 3,
            confidenceScore: 0.77,
          },
          {
            text: "Brunswick",
            category: "BorrowerCity",
            offset: 215,
            length: 9,
            confidenceScore: 0.96,
          },
          {
            text: "New",
            category: "BorrowerState",
            offset: 235,
            length: 3,
            confidenceScore: 0.97,
          },
          {
            text: "Jersey",
            category: "BorrowerCity",
            offset: 239,
            length: 6,
            confidenceScore: 0.55,
          },
          {
            text: "Hollie Rees",
            category: "LenderName",
            offset: 265,
            length: 11,
            confidenceScore: 0.98,
          },
          {
            text: "42 Gladwell Street",
            category: "LenderAddress",
            offset: 303,
            length: 18,
            confidenceScore: 0.92,
          },
          {
            text: "Memphis",
            category: "LenderCity",
            offset: 331,
            length: 7,
            confidenceScore: 0.99,
          },
          {
            text: "Tennessee",
            category: "LenderState",
            offset: 349,
            length: 9,
            confidenceScore: 0.99,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "one hundred ninety-two thousand nine hundred eighty-nine Dollars",
            category: "LoanAmountWords",
            offset: 47,
            length: 64,
            confidenceScore: 1.0,
          },
          {
            text: "$192,989.00",
            category: "LoanAmountNumbers",
            offset: 113,
            length: 11,
            confidenceScore: 1.0,
          },
        ],
      },
    ],
    completedOn,
    deploymentName,
    projectName,
  },
];
export const expectation2: AnalyzeBatchResult[] = [
  {
    kind: "CustomSingleLabelClassification",
    results: [
      {
        id: "0",
        warnings: [],
        classifications: [{ category: "Civil_engineering", confidenceScore: 0.76 }],
      },
    ],
    deploymentName,
    projectName,
    completedOn,
  },
];

export const expectation3: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "Microsoft",
            category: "Organization",
            offset: 0,
            length: 9,
            confidenceScore: 1,
          },
          {
            text: "Bill Gates",
            category: "Person",
            offset: 25,
            length: 10,
            confidenceScore: 1,
          },
          {
            text: "Paul Allen",
            category: "Person",
            offset: 40,
            length: 10,
            confidenceScore: 1,
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        entities: [
          {
            text: "Microsoft",
            category: "Organization",
            offset: 0,
            length: 9,
            confidenceScore: 1,
          },
          {
            text: "Bill Gates",
            category: "Person",
            offset: 26,
            length: 10,
            confidenceScore: 1,
          },
          {
            text: "Paul Allen",
            category: "Person",
            offset: 39,
            length: 10,
            confidenceScore: 0.99,
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation4: AnalyzeBatchResult[] = [
  {
    kind: "CustomMultiLabelClassification",
    results: [
      {
        id: "0",
        warnings: [],
        classifications: [
          {
            category: "Comedy",
            confidenceScore: 0.98,
          },
          {
            category: "Drama",
            confidenceScore: 0.95,
          },
        ],
      },
    ],
    deploymentName,
    projectName,
    completedOn,
  },
];

export const expectation5: AnalyzeBatchResult[] = [
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "1", warnings: [], keyPhrases: ["Bill Gates", "Paul Allen", "Microsoft"] },
      { id: "2", warnings: [], keyPhrases: ["Bill Gates", "Paul Allen", "Microsoft"] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation6: AnalyzeBatchResult[] = [
  {
    kind: "EntityLinking",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [
          {
            name: "Microsoft",
            matches: [{ confidenceScore: 0.39, text: "Microsoft", offset: 0, length: 9 }],
            language: "en",
            dataSourceEntityId: "Microsoft",
            url: "https://en.wikipedia.org/wiki/Microsoft",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "a093e9b9-90f5-a3d5-c4b8-5855e1b01f85",
          },
          {
            name: "Bellevue, Washington",
            matches: [
              {
                confidenceScore: 0.87,
                text: "Bellevue, Washington",
                offset: 36,
                length: 20,
              },
            ],
            language: "en",
            dataSourceEntityId: "Bellevue, Washington",
            url: "https://en.wikipedia.org/wiki/Bellevue,_Washington",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "a2e3a3eb-b83e-42f0-bf19-95b4c4c9d3c0",
          },
          {
            name: "Briann January",
            matches: [{ confidenceScore: 0.14, text: "January", offset: 60, length: 7 }],
            language: "en",
            dataSourceEntityId: "Briann January",
            url: "https://en.wikipedia.org/wiki/Briann_January",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "19fb6fb4-3c50-f314-30e4-7b5470e08274",
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        entities: [
          {
            name: "Steve Ballmer",
            matches: [{ confidenceScore: 0.92, text: "Steve Ballmer", offset: 0, length: 13 }],
            language: "en",
            dataSourceEntityId: "Steve Ballmer",
            url: "https://en.wikipedia.org/wiki/Steve_Ballmer",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "56ff0719-4791-406b-99de-0e99c3e8cefc",
          },
          {
            name: "Chief executive officer",
            matches: [{ confidenceScore: 0.25, text: "CEO", offset: 30, length: 3 }],
            language: "en",
            dataSourceEntityId: "Chief executive officer",
            url: "https://en.wikipedia.org/wiki/Chief_executive_officer",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "cf5db860-9fd2-390d-0b6d-5ba856efed49",
          },
          {
            name: "Microsoft",
            matches: [{ confidenceScore: 0.36, text: "Microsoft", offset: 37, length: 9 }],
            language: "en",
            dataSourceEntityId: "Microsoft",
            url: "https://en.wikipedia.org/wiki/Microsoft",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "a093e9b9-90f5-a3d5-c4b8-5855e1b01f85",
          },
          {
            name: "Satya Nadella",
            matches: [{ confidenceScore: 0.9, text: "Satya Nadella", offset: 68, length: 13 }],
            language: "en",
            dataSourceEntityId: "Satya Nadella",
            url: "https://en.wikipedia.org/wiki/Satya_Nadella",
            dataSource: "Wikipedia",
            bingEntitySearchApiId: "e23e51ed-d16f-4800-9a31-ed056168b9a2",
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation7: AnalyzeBatchResult[] = [
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText: "My SSN is ***********.",
        entities: [
          {
            text: "859-98-0987",
            category: "USSocialSecurityNumber",
            offset: 10,
            length: 11,
            confidenceScore: 0.65,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        redactedText:
          "Your ABA number - ********* - is the first 9 digits in the lower left hand corner of your personal check.",
        entities: [
          {
            text: "111000025",
            category: "PhoneNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.8,
          },
          {
            text: "111000025",
            category: "ABARoutingNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.75,
          },
          {
            text: "111000025",
            category: "NZSocialWelfareNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.65,
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        redactedText: "Is 998.214.865-68 your Brazilian CPF number?",
        entities: [],
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation8: AnalyzeBatchResult[] = [
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText:
          "My SSN is *********** and your ABA number - 111000025 - is the first 9 digits in the lower left hand corner of your personal check.",
        entities: [
          {
            text: "859-98-0987",
            category: "USSocialSecurityNumber",
            offset: 10,
            length: 11,
            confidenceScore: 0.65,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        redactedText:
          "Your ABA number - 111000025 - is the first 9 digits in the lower left hand corner of your personal check.",
        entities: [],
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation9: AnalyzeBatchResult[] = [
  {
    kind: "SentimentAnalysis",
    results: [
      {
        id: "0",
        warnings: [],
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0, negative: 1 },
        sentences: [
          {
            text: "The food was unacceptable",
            sentiment: "negative",
            confidenceScores: { positive: 0, neutral: 0, negative: 1 },
            offset: 0,
            length: 25,
            opinions: [
              {
                target: {
                  sentiment: "negative",
                  confidenceScores: { positive: 0.02, negative: 0.98 },
                  offset: 4,
                  length: 4,
                  text: "food",
                },
                assessments: [
                  {
                    sentiment: "negative",
                    confidenceScores: { positive: 0.02, negative: 0.98 },
                    offset: 13,
                    length: 12,
                    text: "unacceptable",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentiment: "positive",
        confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
        sentences: [
          {
            text: "The rooms were beautiful. ",
            sentiment: "positive",
            confidenceScores: { positive: 1, neutral: 0, negative: 0 },
            offset: 0,
            length: 26,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 4,
                  length: 5,
                  text: "rooms",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 15,
                    length: 9,
                    text: "beautiful",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
          {
            text: "The AC was good and quiet.",
            sentiment: "positive",
            confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
            offset: 26,
            length: 26,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 30,
                  length: 2,
                  text: "AC",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 37,
                    length: 4,
                    text: "good",
                    isNegated: false,
                  },
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 46,
                    length: 5,
                    text: "quiet",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0, negative: 0.99 },
        sentences: [
          {
            text: "The breakfast was good, but the toilet was smelly.",
            sentiment: "negative",
            confidenceScores: { positive: 0, neutral: 0, negative: 0.99 },
            offset: 0,
            length: 50,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 4,
                  length: 9,
                  text: "breakfast",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 18,
                    length: 4,
                    text: "good",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "negative",
                  confidenceScores: { positive: 0, negative: 1 },
                  offset: 32,
                  length: 6,
                  text: "toilet",
                },
                assessments: [
                  {
                    sentiment: "negative",
                    confidenceScores: { positive: 0, negative: 1 },
                    offset: 43,
                    length: 6,
                    text: "smelly",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "3",
        warnings: [],
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        sentences: [
          {
            text: "Loved this hotel - good breakfast - nice shuttle service - clean rooms.",
            sentiment: "positive",
            confidenceScores: { positive: 1, neutral: 0, negative: 0 },
            offset: 0,
            length: 71,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 11,
                  length: 5,
                  text: "hotel",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 0,
                    length: 5,
                    text: "Loved",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 24,
                  length: 9,
                  text: "breakfast",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 19,
                    length: 4,
                    text: "good",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 41,
                  length: 15,
                  text: "shuttle service",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 36,
                    length: 4,
                    text: "nice",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 65,
                  length: 5,
                  text: "rooms",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 59,
                    length: 5,
                    text: "clean",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "4",
        warnings: [],
        sentiment: "positive",
        confidenceScores: { positive: 0.92, neutral: 0.07, negative: 0.01 },
        sentences: [
          {
            text: "I had a great unobstructed view of the Microsoft campus.",
            sentiment: "positive",
            confidenceScores: { positive: 0.92, neutral: 0.07, negative: 0.01 },
            offset: 0,
            length: 56,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 27,
                  length: 4,
                  text: "view",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 8,
                    length: 5,
                    text: "great",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "5",
        warnings: [],
        sentiment: "negative",
        confidenceScores: { positive: 0.04, neutral: 0, negative: 0.96 },
        sentences: [
          {
            text: "Nice rooms but bathrooms were old and the toilet was dirty when we arrived.",
            sentiment: "negative",
            confidenceScores: { positive: 0.04, neutral: 0, negative: 0.96 },
            offset: 0,
            length: 75,
            opinions: [
              {
                target: {
                  sentiment: "positive",
                  confidenceScores: { positive: 1, negative: 0 },
                  offset: 5,
                  length: 5,
                  text: "rooms",
                },
                assessments: [
                  {
                    sentiment: "positive",
                    confidenceScores: { positive: 1, negative: 0 },
                    offset: 0,
                    length: 4,
                    text: "Nice",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "negative",
                  confidenceScores: { positive: 0, negative: 1 },
                  offset: 15,
                  length: 9,
                  text: "bathrooms",
                },
                assessments: [
                  {
                    sentiment: "negative",
                    confidenceScores: { positive: 0, negative: 1 },
                    offset: 30,
                    length: 3,
                    text: "old",
                    isNegated: false,
                  },
                ],
              },
              {
                target: {
                  sentiment: "negative",
                  confidenceScores: { positive: 0.01, negative: 0.99 },
                  offset: 42,
                  length: 6,
                  text: "toilet",
                },
                assessments: [
                  {
                    sentiment: "negative",
                    confidenceScores: { positive: 0.01, negative: 0.99 },
                    offset: 53,
                    length: 5,
                    text: "dirty",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "6",
        warnings: [],
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.02, negative: 0.98 },
        sentences: [
          {
            text: "The toilet smelled.",
            sentiment: "negative",
            confidenceScores: { positive: 0, neutral: 0.02, negative: 0.98 },
            offset: 0,
            length: 19,
            opinions: [
              {
                target: {
                  sentiment: "negative",
                  confidenceScores: { positive: 0, negative: 1 },
                  offset: 4,
                  length: 6,
                  text: "toilet",
                },
                assessments: [
                  {
                    sentiment: "negative",
                    confidenceScores: { positive: 0, negative: 1 },
                    offset: 11,
                    length: 7,
                    text: "smelled",
                    isNegated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation10: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: en,es,de,fr,zh-Hans,ar,cs,da,fi,hu,it,ja,ko,no,nl,pl,pt-BR,pt-PT,ru,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      {
        id: "3",
        warnings: [],
        entities: [
          {
            text: "restaurant",
            category: "Location",
            subCategory: "Structural",
            offset: 4,
            length: 10,
            confidenceScore: 0.97,
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      {
        id: "3",
        warnings: [],
        redactedText: "The restaurant had really good food. I recommend you try it.",
        entities: [],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT,af,bg,ca,da,el,et,fi,hr,hu,id,lv,nl,no,pl,ro,ru,sk,sl,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      { id: "3", warnings: [], keyPhrases: ["good food", "restaurant"] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation11: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: en,es,de,fr,zh-Hans,ar,cs,da,fi,hu,it,ja,ko,no,nl,pl,pt-BR,pt-PT,ru,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      { id: "3", error: { code: "InvalidDocument", message: "Document text is empty." } },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      { id: "3", error: { code: "InvalidDocument", message: "Document text is empty." } },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT,af,bg,ca,da,el,et,fi,hr,hu,id,lv,nl,no,pl,ro,ru,sk,sl,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      { id: "3", error: { code: "InvalidDocument", message: "Document text is empty." } },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation12: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "one",
            category: "Quantity",
            subCategory: "Number",
            offset: 0,
            length: 3,
            confidenceScore: 0.8,
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        entities: [
          {
            text: "two",
            category: "Quantity",
            subCategory: "Number",
            offset: 0,
            length: 3,
            confidenceScore: 0.8,
          },
        ],
      },
      {
        id: "3",
        warnings: [],
        entities: [
          {
            text: "three",
            category: "Quantity",
            subCategory: "Number",
            offset: 0,
            length: 5,
            confidenceScore: 0.8,
          },
        ],
      },
      {
        id: "4",
        warnings: [],
        entities: [
          {
            text: "four",
            category: "Quantity",
            subCategory: "Number",
            offset: 0,
            length: 4,
            confidenceScore: 0.8,
          },
        ],
      },
      {
        id: "5",
        warnings: [],
        entities: [
          {
            text: "five",
            category: "Quantity",
            subCategory: "Number",
            offset: 0,
            length: 4,
            confidenceScore: 0.8,
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      { id: "1", warnings: [], redactedText: "one", entities: [] },
      { id: "2", warnings: [], redactedText: "two", entities: [] },
      { id: "3", warnings: [], redactedText: "three", entities: [] },
      { id: "4", warnings: [], redactedText: "four", entities: [] },
      { id: "5", warnings: [], redactedText: "five", entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "1", warnings: [], keyPhrases: [] },
      { id: "2", warnings: [], keyPhrases: [] },
      { id: "3", warnings: [], keyPhrases: [] },
      { id: "4", warnings: [], keyPhrases: [] },
      { id: "5", warnings: [], keyPhrases: [] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation13: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      { id: "56", warnings: [], entities: [] },
      { id: "0", warnings: [], entities: [] },
      { id: "22", warnings: [], entities: [] },
      { id: "19", warnings: [], entities: [] },
      { id: "1", warnings: [], entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      { id: "56", warnings: [], redactedText: ":)", entities: [] },
      { id: "0", warnings: [], redactedText: ":(", entities: [] },
      { id: "22", warnings: [], redactedText: "w", entities: [] },
      { id: "19", warnings: [], redactedText: ":P", entities: [] },
      { id: "1", warnings: [], redactedText: ":D", entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "56", warnings: [], keyPhrases: [] },
      { id: "0", warnings: [], keyPhrases: [] },
      { id: "22", warnings: [], keyPhrases: [] },
      { id: "19", warnings: [], keyPhrases: [] },
      { id: "1", warnings: [], keyPhrases: [] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation14: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      { id: "0", warnings: [], entities: [] },
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "hotel",
            category: "Location",
            offset: 19,
            length: 5,
            confidenceScore: 0.99,
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        entities: [
          {
            text: "restaurant",
            category: "Location",
            subCategory: "Structural",
            offset: 4,
            length: 10,
            confidenceScore: 0.96,
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText: "This was the best day of my life.",
        entities: [],
      },
      {
        id: "1",
        warnings: [],
        redactedText: "I did not like the hotel we stayed at. It was too expensive.",
        entities: [],
      },
      {
        id: "2",
        warnings: [],
        redactedText: "The restaurant was not as good as I hoped.",
        entities: [],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "0", warnings: [], keyPhrases: ["best day", "life"] },
      { id: "1", warnings: [], keyPhrases: ["hotel"] },
      { id: "2", warnings: [], keyPhrases: ["restaurant"] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation15: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "park",
            category: "Location",
            offset: 17,
            subCategory: "Structural",
            length: 4,
            confidenceScore: 0.99,
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        entities: [
          { text: "Español", category: "Skill", offset: 31, length: 7, confidenceScore: 0.94 },
        ],
      },
      { id: "3", warnings: [], entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      { id: "1", warnings: [], redactedText: "I will go to the park.", entities: [] },
      {
        id: "2",
        warnings: [],
        redactedText: "Este es un document escrito en Español.",
        entities: [],
      },
      { id: "3", warnings: [], redactedText: "猫は幸せ", entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "1", warnings: [], keyPhrases: ["park"] },
      { id: "2", warnings: [], keyPhrases: ["Español", "document"] },
      { id: "3", warnings: [], keyPhrases: ["は幸せ"] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation16: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "0",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: en,es,de,fr,zh-Hans,ar,cs,da,fi,hu,it,ja,ko,no,nl,pl,pt-BR,pt-PT,ru,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT. For additional details see https://aka.ms/language-service/language-support",
        },
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      {
        id: "0",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code. Supported languages: ja,ko,zh-Hans,de,en,es,fr,it,pt-BR,pt-PT,af,bg,ca,da,el,et,fi,hr,hu,id,lv,nl,no,pl,ro,ru,sk,sl,sv,tr. For additional details see https://aka.ms/language-service/language-support",
        },
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation17: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      { id: "0", warnings: [], entities: [] },
      { id: "1", warnings: [], entities: [] },
      { id: "2", warnings: [], entities: [] },
      { id: "3", warnings: [], entities: [] },
      { id: "4", warnings: [], entities: [] },
      { id: "5", warnings: [], entities: [] },
      { id: "6", warnings: [], entities: [] },
      { id: "7", warnings: [], entities: [] },
      { id: "8", warnings: [], entities: [] },
      { id: "9", warnings: [], entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "0", warnings: [], keyPhrases: ["random text"] },
      { id: "1", warnings: [], keyPhrases: ["random text"] },
      { id: "2", warnings: [], keyPhrases: ["random text"] },
      { id: "3", warnings: [], keyPhrases: ["random text"] },
      { id: "4", warnings: [], keyPhrases: ["random text"] },
      { id: "5", warnings: [], keyPhrases: ["random text"] },
      { id: "6", warnings: [], keyPhrases: ["random text"] },
      { id: "7", warnings: [], keyPhrases: ["random text"] },
      { id: "8", warnings: [], keyPhrases: ["random text"] },
      { id: "9", warnings: [], keyPhrases: ["random text"] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "EntityRecognition",
    results: [
      { id: "10", warnings: [], entities: [] },
      { id: "11", warnings: [], entities: [] },
      { id: "12", warnings: [], entities: [] },
      { id: "13", warnings: [], entities: [] },
      { id: "14", warnings: [], entities: [] },
      { id: "15", warnings: [], entities: [] },
      { id: "16", warnings: [], entities: [] },
      { id: "17", warnings: [], entities: [] },
      { id: "18", warnings: [], entities: [] },
      { id: "19", warnings: [], entities: [] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "10", warnings: [], keyPhrases: ["random text"] },
      { id: "11", warnings: [], keyPhrases: ["random text"] },
      { id: "12", warnings: [], keyPhrases: ["random text"] },
      { id: "13", warnings: [], keyPhrases: ["random text"] },
      { id: "14", warnings: [], keyPhrases: ["random text"] },
      { id: "15", warnings: [], keyPhrases: ["random text"] },
      { id: "16", warnings: [], keyPhrases: ["random text"] },
      { id: "17", warnings: [], keyPhrases: ["random text"] },
      { id: "18", warnings: [], keyPhrases: ["random text"] },
      { id: "19", warnings: [], keyPhrases: ["random text"] },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "EntityRecognition",
    results: [
      { id: "20", warnings: [], entities: [] },
      { id: "21", warnings: [], entities: [] },
      { id: "22", warnings: [], entities: [] },
      { id: "23", warnings: [], entities: [] },
      {
        id: "24",
        warnings: [],
        entities: [
          { text: "Microsoft", category: "Organization", offset: 0, length: 9, confidenceScore: 1 },
          { text: "Bill Gates", category: "Person", offset: 25, length: 10, confidenceScore: 1 },
          { text: "Paul Allen", category: "Person", offset: 40, length: 10, confidenceScore: 1 },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      { id: "20", warnings: [], keyPhrases: ["random text"] },
      { id: "21", warnings: [], keyPhrases: ["random text"] },
      { id: "22", warnings: [], keyPhrases: ["random text"] },
      { id: "23", warnings: [], keyPhrases: ["random text"] },
      { id: "24", warnings: [], keyPhrases: ["Bill Gates", "Paul Allen", "Microsoft"] },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation18: AnalyzeBatchResult[] = [
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText: "👩🏻‍👩🏽‍👧🏾‍👦🏿 SSN: ***********",
        entities: [
          {
            text: "859-98-0987",
            category: "USSocialSecurityNumber",
            offset: 17,
            length: 11,
            confidenceScore: 0.65,
          },
        ],
      },
    ],
    modelVersion,
    completedOn,
  },
];

export const expectation19: AnalyzeBatchResult[] = [
  {
    kind: "PiiEntityRecognition",
    results: [{ id: "0", warnings: [], redactedText: "I will go to the park.", entities: [] }],
    actionName: "action1",
    completedOn,
    modelVersion,
  },
  {
    kind: "PiiEntityRecognition",
    results: [{ id: "0", warnings: [], redactedText: "I will go to the park.", entities: [] }],
    actionName: "action2",
    completedOn,
    modelVersion,
  },
];

export const expectation20: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020538" },
              { name: "AOD", entityId: "0000023317" },
              { name: "BI", entityId: "BI00001" },
              { name: "CCPSS", entityId: "1017493" },
              { name: "CCS", entityId: "7.1" },
              { name: "CHV", entityId: "0000015800" },
              { name: "COSTAR", entityId: "397" },
              { name: "CSP", entityId: "0571-5243" },
              { name: "CST", entityId: "HYPERTENS" },
              { name: "DXP", entityId: "U002034" },
              { name: "HPO", entityId: "HP:0000822" },
              { name: "ICD10", entityId: "I10-I15.9" },
              { name: "ICD10AM", entityId: "I10-I15.9" },
              { name: "ICD10CM", entityId: "I10" },
              { name: "ICD9CM", entityId: "997.91" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU035456" },
              { name: "ICPC2P", entityId: "K85004" },
              { name: "LCH", entityId: "U002317" },
              { name: "LCH_NW", entityId: "sh85063723" },
              { name: "LNC", entityId: "LA14293-7" },
              { name: "MDR", entityId: "10020772" },
              { name: "MEDCIN", entityId: "33288" },
              { name: "MEDLINEPLUS", entityId: "34" },
              { name: "MSH", entityId: "D006973" },
              { name: "MTH", entityId: "005" },
              { name: "MTHICD9", entityId: "997.91" },
              { name: "NANDA-I", entityId: "00905" },
              { name: "NCI", entityId: "C3117" },
              { name: "NCI_CPTAC", entityId: "C3117" },
              { name: "NCI_CTCAE", entityId: "E13785" },
              { name: "NCI_CTRP", entityId: "C3117" },
              { name: "NCI_FDA", entityId: "1908" },
              { name: "NCI_GDC", entityId: "C3117" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000458091" },
              { name: "NCI_NICHD", entityId: "C3117" },
              { name: "NCI_caDSR", entityId: "C3117" },
              { name: "NOC", entityId: "060808" },
              { name: "OMIM", entityId: "MTHU002068" },
              { name: "PCDS", entityId: "PRB_11000.06" },
              { name: "PDQ", entityId: "CDR0000686951" },
              { name: "PSY", entityId: "23830" },
              { name: "RCD", entityId: "XE0Ub" },
              { name: "SNM", entityId: "F-70700" },
              { name: "SNMI", entityId: "D3-02000" },
              { name: "SNOMEDCT_US", entityId: "38341003" },
              { name: "WHO", entityId: "0210" },
            ],
            text: "high blood pressure",
            category: "SymptomOrSign",
            offset: 29,
            length: 19,
            confidenceScore: 1,
            assertion: { certainty: "negative" },
            normalizedText: "Hypertensive disease",
          },
        ],
        entityRelations: [],
        id: "0",
        warnings: [],
      },
      {
        entities: [
          {
            dataSources: [],
            text: "100mg",
            category: "Dosage",
            offset: 11,
            length: 5,
            confidenceScore: 0.98,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 17,
            length: 9,
            confidenceScore: 1,
            normalizedText: "ibuprofen",
          },
          {
            dataSources: [],
            text: "twice daily",
            category: "Frequency",
            offset: 34,
            length: 11,
            confidenceScore: 1,
          },
        ],
        entityRelations: [
          {
            relationType: "DosageOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [],
                  text: "100mg",
                  category: "Dosage",
                  offset: 11,
                  length: 5,
                  confidenceScore: 0.98,
                },
                name: "Dosage",
              },
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
            ],
          },
          {
            relationType: "FrequencyOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
              {
                entity: {
                  dataSources: [],
                  text: "twice daily",
                  category: "Frequency",
                  offset: 34,
                  length: 11,
                  confidenceScore: 1,
                },
                name: "Frequency",
              },
            ],
          },
        ],
        id: "1",
        warnings: [],
      },
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0021270" },
              { name: "AOD", entityId: "0000005273" },
              { name: "CCPSS", entityId: "0030805" },
              { name: "CHV", entityId: "0000006675" },
              { name: "DXP", entityId: "U002089" },
              { name: "LCH", entityId: "U002421" },
              { name: "LCH_NW", entityId: "sh85066022" },
              { name: "LNC", entityId: "LA19747-7" },
              { name: "MDR", entityId: "10021731" },
              { name: "MSH", entityId: "D007223" },
              { name: "NCI", entityId: "C27956" },
              { name: "NCI_FDA", entityId: "C27956" },
              { name: "NCI_NICHD", entityId: "C27956" },
              { name: "SNOMEDCT_US", entityId: "133931009" },
            ],
            text: "Baby",
            category: "Age",
            offset: 0,
            length: 4,
            confidenceScore: 0.94,
            normalizedText: "Infant",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0025289" },
              { name: "AOD", entityId: "0000006185" },
              { name: "BI", entityId: "BI00546" },
              { name: "CCPSS", entityId: "1018016" },
              { name: "CCSR_10", entityId: "NVS001" },
              { name: "CCSR_ICD10CM", entityId: "NVS001" },
              { name: "CHV", entityId: "0000007932" },
              { name: "COSTAR", entityId: "478" },
              { name: "CSP", entityId: "2042-5301" },
              { name: "CST", entityId: "MENINGITIS" },
              { name: "DXP", entityId: "U002543" },
              { name: "HPO", entityId: "HP:0001287" },
              { name: "ICD10", entityId: "G03.9" },
              { name: "ICD10AM", entityId: "G03.9" },
              { name: "ICD10CM", entityId: "G03.9" },
              { name: "ICD9CM", entityId: "322.9" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU048434" },
              { name: "ICPC2P", entityId: "N71002" },
              { name: "LCH", entityId: "U002901" },
              { name: "LCH_NW", entityId: "sh85083562" },
              { name: "LNC", entityId: "LP20756-0" },
              { name: "MDR", entityId: "10027199" },
              { name: "MEDCIN", entityId: "31192" },
              { name: "MEDLINEPLUS", entityId: "324" },
              { name: "MSH", entityId: "D008581" },
              { name: "NANDA-I", entityId: "02899" },
              { name: "NCI", entityId: "C26828" },
              { name: "NCI_CPTAC", entityId: "C26828" },
              { name: "NCI_CTCAE", entityId: "E11458" },
              { name: "NCI_FDA", entityId: "2389" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000471780" },
              { name: "NCI_NICHD", entityId: "C26828" },
              { name: "NCI_caDSR", entityId: "C26828" },
              { name: "OMIM", entityId: "MTHU005994" },
              { name: "PSY", entityId: "30660" },
              { name: "RCD", entityId: "X000H" },
              { name: "SNM", entityId: "M-40000" },
              { name: "SNMI", entityId: "DA-10010" },
              { name: "SNOMEDCT_US", entityId: "7180009" },
              { name: "WHO", entityId: "0955" },
            ],
            text: "Meningitis",
            category: "Diagnosis",
            offset: 24,
            length: 10,
            confidenceScore: 1,
            assertion: { certainty: "negativePossible" },
            normalizedText: "Meningitis",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0015967" },
              { name: "AIR", entityId: "FEVER" },
              { name: "AOD", entityId: "0000004396" },
              { name: "BI", entityId: "BI00751" },
              { name: "CCC", entityId: "K25.2" },
              { name: "CCPSS", entityId: "1017166" },
              { name: "CCSR_10", entityId: "SYM002" },
              { name: "CCSR_ICD10CM", entityId: "SYM002" },
              { name: "CHV", entityId: "0000005010" },
              { name: "COSTAR", entityId: "300" },
              { name: "CPM", entityId: "65287" },
              { name: "CSP", entityId: "2871-4310" },
              { name: "CST", entityId: "FEVER" },
              { name: "DXP", entityId: "U001483" },
              { name: "GO", entityId: "GO:0001660" },
              { name: "HPO", entityId: "HP:0001945" },
              { name: "ICD10", entityId: "R50.9" },
              { name: "ICD10AM", entityId: "R50.9" },
              { name: "ICD10CM", entityId: "R50.9" },
              { name: "ICD9CM", entityId: "780.60" },
              { name: "ICNP", entityId: "10041539" },
              { name: "ICPC", entityId: "A03" },
              { name: "ICPC2EENG", entityId: "A03" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU041751" },
              { name: "ICPC2P", entityId: "A03002" },
              { name: "LCH", entityId: "U001776" },
              { name: "LCH_NW", entityId: "sh85047994" },
              { name: "LNC", entityId: "MTHU013518" },
              { name: "MDR", entityId: "10005911" },
              { name: "MEDCIN", entityId: "6005" },
              { name: "MEDLINEPLUS", entityId: "511" },
              { name: "MSH", entityId: "D005334" },
              { name: "MTHICD9", entityId: "780.60" },
              { name: "NANDA-I", entityId: "01128" },
              { name: "NCI", entityId: "C3038" },
              { name: "NCI_CTCAE", entityId: "E11102" },
              { name: "NCI_FDA", entityId: "1858" },
              { name: "NCI_GDC", entityId: "C3038" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000450108" },
              { name: "NCI_NICHD", entityId: "C3038" },
              { name: "NCI_caDSR", entityId: "C3038" },
              { name: "NOC", entityId: "070307" },
              { name: "OMIM", entityId: "MTHU005439" },
              { name: "OMS", entityId: "50.03" },
              { name: "PCDS", entityId: "PRB_11020.02" },
              { name: "PDQ", entityId: "CDR0000775882" },
              { name: "PSY", entityId: "23840" },
              { name: "QMR", entityId: "Q0200115" },
              { name: "RCD", entityId: "X76EI" },
              { name: "SNM", entityId: "F-03003" },
              { name: "SNMI", entityId: "F-03003" },
              { name: "SNOMEDCT_US", entityId: "386661006" },
              { name: "WHO", entityId: "0725" },
            ],
            text: "fever",
            category: "SymptomOrSign",
            offset: 47,
            length: 5,
            confidenceScore: 0.98,
            normalizedText: "Fever",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0026591" },
              { name: "AOD", entityId: "0000027173" },
              { name: "CCPSS", entityId: "U000286" },
              { name: "CHV", entityId: "0000008266" },
              { name: "CSP", entityId: "1124-5492" },
              { name: "HL7V3.0", entityId: "MTH" },
              { name: "LCH", entityId: "U003028" },
              { name: "LCH_NW", entityId: "sh85087526" },
              { name: "LNC", entityId: "LA10417-6" },
              { name: "MSH", entityId: "D009035" },
              { name: "NCI", entityId: "C25189" },
              { name: "NCI_CDISC", entityId: "C25189" },
              { name: "NCI_GDC", entityId: "C25189" },
              { name: "NCI_caDSR", entityId: "C25189" },
              { name: "PSY", entityId: "32140" },
              { name: "RCD", entityId: "X78ym" },
              { name: "SNMI", entityId: "S-10120" },
              { name: "SNOMEDCT_US", entityId: "72705000" },
            ],
            text: "mother",
            category: "FamilyRelation",
            offset: 60,
            length: 6,
            confidenceScore: 0.99,
            normalizedText: "Mother (person)",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0030842" },
              { name: "AOD", entityId: "0000019206" },
              { name: "ATC", entityId: "J01C" },
              { name: "CCPSS", entityId: "0014106" },
              { name: "CHV", entityId: "0000009423" },
              { name: "CSP", entityId: "0199-8025" },
              { name: "GS", entityId: "4011" },
              { name: "LCH", entityId: "U003521" },
              { name: "LCH_NW", entityId: "sh85099402" },
              { name: "LNC", entityId: "LP14319-5" },
              { name: "MEDCIN", entityId: "40319" },
              { name: "MMSL", entityId: "d00116" },
              { name: "MSH", entityId: "D010406" },
              { name: "NCI", entityId: "C1500" },
              { name: "NCI_DTP", entityId: "NSC0402815" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000045296" },
              { name: "NDDF", entityId: "016121" },
              { name: "PSY", entityId: "37190" },
              { name: "RCD", entityId: "x009C" },
              { name: "SNM", entityId: "E-7260" },
              { name: "SNMI", entityId: "C-54000" },
              { name: "SNOMEDCT_US", entityId: "764146007" },
              { name: "VANDF", entityId: "4019880" },
            ],
            text: "Penicillin",
            category: "MedicationName",
            offset: 77,
            length: 10,
            confidenceScore: 0.84,
            assertion: { certainty: "neutralPossible" },
            normalizedText: "penicillins",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0021270" },
              { name: "AOD", entityId: "0000005273" },
              { name: "CCPSS", entityId: "0030805" },
              { name: "CHV", entityId: "0000006675" },
              { name: "DXP", entityId: "U002089" },
              { name: "LCH", entityId: "U002421" },
              { name: "LCH_NW", entityId: "sh85066022" },
              { name: "LNC", entityId: "LA19747-7" },
              { name: "MDR", entityId: "10021731" },
              { name: "MSH", entityId: "D007223" },
              { name: "NCI", entityId: "C27956" },
              { name: "NCI_FDA", entityId: "C27956" },
              { name: "NCI_NICHD", entityId: "C27956" },
              { name: "SNOMEDCT_US", entityId: "133931009" },
            ],
            text: "baby",
            category: "FamilyRelation",
            offset: 96,
            length: 4,
            confidenceScore: 1,
            normalizedText: "Infant",
          },
        ],
        entityRelations: [],
        id: "2",
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation21: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [],
        entityRelations: [],
        id: "0",
        warnings: [
          {
            code: "DocumentTruncated",
            message:
              "Document is greater than 5120 chars; relations across splits of 5120 chars may be skipped by the model",
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation22: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 20,
            length: 9,
            confidenceScore: 0.95,
            normalizedText: "ibuprofen",
          },
        ],
        entityRelations: [],
        id: "0",
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation23: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 12,
            length: 9,
            confidenceScore: 0.95,
            normalizedText: "ibuprofen",
          },
        ],
        entityRelations: [],
        id: "0",
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation24: AnalyzeBatchResult[] = [
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText:
          "My SSN is *********** and your ABA number - ********* - is the first 9 digits in the lower left hand corner of your personal check.",
        entities: [
          {
            text: "859-98-0987",
            category: "USSocialSecurityNumber",
            offset: 10,
            length: 11,
            confidenceScore: 0.65,
          },
          {
            text: "111000025",
            category: "PhoneNumber",
            offset: 44,
            length: 9,
            confidenceScore: 0.8,
          },
          {
            text: "111000025",
            category: "ABARoutingNumber",
            offset: 44,
            length: 9,
            confidenceScore: 0.75,
          },
          {
            text: "111000025",
            category: "NZSocialWelfareNumber",
            offset: 44,
            length: 9,
            confidenceScore: 0.65,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        redactedText:
          "Your ABA number - ********* - is the first 9 digits in the lower left hand corner of your personal check.",
        entities: [
          {
            text: "111000025",
            category: "PhoneNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.8,
          },
          {
            text: "111000025",
            category: "ABARoutingNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.75,
          },
          {
            text: "111000025",
            category: "NZSocialWelfareNumber",
            offset: 18,
            length: 9,
            confidenceScore: 0.65,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];
export const expectation25: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020538" },
              { name: "AOD", entityId: "0000023317" },
              { name: "BI", entityId: "BI00001" },
              { name: "CCPSS", entityId: "1017493" },
              { name: "CCS", entityId: "7.1" },
              { name: "CHV", entityId: "0000015800" },
              { name: "COSTAR", entityId: "397" },
              { name: "CSP", entityId: "0571-5243" },
              { name: "CST", entityId: "HYPERTENS" },
              { name: "DXP", entityId: "U002034" },
              { name: "HPO", entityId: "HP:0000822" },
              { name: "ICD10", entityId: "I10-I15.9" },
              { name: "ICD10AM", entityId: "I10-I15.9" },
              { name: "ICD10CM", entityId: "I10" },
              { name: "ICD9CM", entityId: "997.91" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU035456" },
              { name: "ICPC2P", entityId: "K85004" },
              { name: "LCH", entityId: "U002317" },
              { name: "LCH_NW", entityId: "sh85063723" },
              { name: "LNC", entityId: "LA14293-7" },
              { name: "MDR", entityId: "10020772" },
              { name: "MEDCIN", entityId: "33288" },
              { name: "MEDLINEPLUS", entityId: "34" },
              { name: "MSH", entityId: "D006973" },
              { name: "MTH", entityId: "005" },
              { name: "MTHICD9", entityId: "997.91" },
              { name: "NANDA-I", entityId: "00905" },
              { name: "NCI", entityId: "C3117" },
              { name: "NCI_CPTAC", entityId: "C3117" },
              { name: "NCI_CTCAE", entityId: "E13785" },
              { name: "NCI_CTRP", entityId: "C3117" },
              { name: "NCI_FDA", entityId: "1908" },
              { name: "NCI_GDC", entityId: "C3117" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000458091" },
              { name: "NCI_NICHD", entityId: "C3117" },
              { name: "NCI_caDSR", entityId: "C3117" },
              { name: "NOC", entityId: "060808" },
              { name: "OMIM", entityId: "MTHU002068" },
              { name: "PCDS", entityId: "PRB_11000.06" },
              { name: "PDQ", entityId: "CDR0000686951" },
              { name: "PSY", entityId: "23830" },
              { name: "RCD", entityId: "XE0Ub" },
              { name: "SNM", entityId: "F-70700" },
              { name: "SNMI", entityId: "D3-02000" },
              { name: "SNOMEDCT_US", entityId: "38341003" },
              { name: "WHO", entityId: "0210" },
            ],
            text: "high blood pressure",
            category: "SymptomOrSign",
            offset: 29,
            length: 19,
            confidenceScore: 1,
            assertion: { certainty: "negative" },
            normalizedText: "Hypertensive disease",
          },
        ],
        entityRelations: [],
        id: "0",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "a6ba00cb-d94f-47bc-9acb-44a7361de453",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:a6ba00cb-d94f-47bc-9acb-44a7361de453",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/53c4aa39-3150-4951-94ed-7f4260fc2670",
              resource: {
                resourceType: "Composition",
                id: "53c4aa39-3150-4951-94ed-7f4260fc2670",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "11526-1", display: "Pathology study" },
                  ],
                  text: "Pathology study",
                },
                subject: {
                  reference: "Patient/9b180042-487d-4f04-aec8-b63dede967a9",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/46a049bd-2b0e-4325-8025-60c2ddb4f8a1",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/c4998788-8e0e-454f-a583-ddc2aa60d81c",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Pathology study",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/c4998788-8e0e-454f-a583-ddc2aa60d81c",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>Patient does not suffer from high blood pressure.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/562eb58b-4b45-4557-8769-ac27808db93b",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/9b180042-487d-4f04-aec8-b63dede967a9",
              resource: {
                resourceType: "Patient",
                id: "9b180042-487d-4f04-aec8-b63dede967a9",
                language: "en",
                gender: "unknown",
              },
            },
            {
              fullUrl: "Encounter/46a049bd-2b0e-4325-8025-60c2ddb4f8a1",
              resource: {
                resourceType: "Encounter",
                id: "46a049bd-2b0e-4325-8025-60c2ddb4f8a1",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/9b180042-487d-4f04-aec8-b63dede967a9",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/562eb58b-4b45-4557-8769-ac27808db93b",
              resource: {
                resourceType: "List",
                id: "562eb58b-4b45-4557-8769-ac27808db93b",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/9b180042-487d-4f04-aec8-b63dede967a9",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/46a049bd-2b0e-4325-8025-60c2ddb4f8a1",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "Observation/74e44e5a-fb20-4a85-bbb6-8675388d5bda",
                      type: "Observation",
                      display: "high blood pressure",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "Observation/74e44e5a-fb20-4a85-bbb6-8675388d5bda",
              resource: {
                resourceType: "Observation",
                id: "74e44e5a-fb20-4a85-bbb6-8675388d5bda",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 29 },
                      { url: "length", valueInteger: 19 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/observation-category",
                        code: "exam",
                        display: "Exam",
                      },
                    ],
                    text: "Exam",
                  },
                ],
                code: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0020538",
                      display: "Hypertensive disease",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000023317" },
                    { system: "http://www.nlm.nih.gov/research/umls/bi", code: "BI00001" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "1017493" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccs", code: "7.1" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000015800" },
                    { system: "http://www.nlm.nih.gov/research/umls/costar", code: "397" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "0571-5243" },
                    { system: "http://www.nlm.nih.gov/research/umls/cst", code: "HYPERTENS" },
                    { system: "http://www.nlm.nih.gov/research/umls/dxp", code: "U002034" },
                    { system: "http://www.nlm.nih.gov/research/umls/hpo", code: "HP:0000822" },
                    { system: "http://hl7.org/fhir/sid/icd-10", code: "I10-I15.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-am", code: "I10-I15.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-cm", code: "I10" },
                    { system: "http://hl7.org/fhir/sid/icd-9-cm", code: "997.91" },
                    { system: "http://hl7.org/fhir/sid/icpc2icd10eng", code: "MTHU035456" },
                    { system: "http://hl7.org/fhir/sid/icpc-2p", code: "K85004" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U002317" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85063723" },
                    { system: "http://loinc.org", code: "LA14293-7" },
                    { system: "http://www.nlm.nih.gov/research/umls/mdr", code: "10020772" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "33288" },
                    { system: "http://www.nlm.nih.gov/research/umls/medlineplus", code: "34" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D006973" },
                    { system: "http://www.nlm.nih.gov/research/umls/mth", code: "005" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthicd9", code: "997.91" },
                    { system: "http://www.nlm.nih.gov/research/umls/nanda-i", code: "00905" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cptac", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctcae", code: "E13785" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctrp", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "1908" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_gdc", code: "C3117" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000458091",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_nichd", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cadsr", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/noc", code: "060808" },
                    { system: "http://www.nlm.nih.gov/research/umls/omim", code: "MTHU002068" },
                    { system: "http://www.nlm.nih.gov/research/umls/pcds", code: "PRB_11000.06" },
                    { system: "http://www.nlm.nih.gov/research/umls/pdq", code: "CDR0000686951" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "23830" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "XE0Ub" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "F-70700" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "D3-02000" },
                    { system: "http://snomed.info/sct", code: "38341003" },
                    { system: "http://www.nlm.nih.gov/research/umls/who", code: "0210" },
                  ],
                  text: "high blood pressure",
                },
                subject: {
                  reference: "Patient/9b180042-487d-4f04-aec8-b63dede967a9",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/46a049bd-2b0e-4325-8025-60c2ddb4f8a1",
                  type: "Encounter",
                  display: "unknown",
                },
                interpretation: [
                  {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        code: "NEG",
                        display: "Negative",
                      },
                    ],
                    text: "Negative",
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/c4998788-8e0e-454f-a583-ddc2aa60d81c",
              resource: {
                resourceType: "Practitioner",
                id: "c4998788-8e0e-454f-a583-ddc2aa60d81c",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
      {
        entities: [
          {
            dataSources: [],
            text: "100mg",
            category: "Dosage",
            offset: 11,
            length: 5,
            confidenceScore: 0.98,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 17,
            length: 9,
            confidenceScore: 1,
            normalizedText: "ibuprofen",
          },
          {
            dataSources: [],
            text: "twice daily",
            category: "Frequency",
            offset: 34,
            length: 11,
            confidenceScore: 1,
          },
        ],
        entityRelations: [
          {
            relationType: "DosageOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [],
                  text: "100mg",
                  category: "Dosage",
                  offset: 11,
                  length: 5,
                  confidenceScore: 0.98,
                },
                name: "Dosage",
              },
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
            ],
          },
          {
            relationType: "FrequencyOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
              {
                entity: {
                  dataSources: [],
                  text: "twice daily",
                  category: "Frequency",
                  offset: 34,
                  length: 11,
                  confidenceScore: 1,
                },
                name: "Frequency",
              },
            ],
          },
        ],
        id: "1",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "19e4254c-44c5-48a3-b831-70c04de090db",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:19e4254c-44c5-48a3-b831-70c04de090db",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/3510d7bc-290c-4e47-96e1-f8bd72ca112c",
              resource: {
                resourceType: "Composition",
                id: "3510d7bc-290c-4e47-96e1-f8bd72ca112c",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "11526-1", display: "Pathology study" },
                  ],
                  text: "Pathology study",
                },
                subject: {
                  reference: "Patient/ab1ba858-6fd9-4da0-af62-960053e38286",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/60d5cd33-f8ac-40a6-824a-62ff8a9d9e6e",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/fe1e2846-3eea-44ed-97e9-1d5e2645999b",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Pathology study",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/fe1e2846-3eea-44ed-97e9-1d5e2645999b",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>Prescribed 100mg ibuprofen, taken twice daily.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/a720354d-bc72-46e7-9429-99e0d16bbc2a",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/ab1ba858-6fd9-4da0-af62-960053e38286",
              resource: {
                resourceType: "Patient",
                id: "ab1ba858-6fd9-4da0-af62-960053e38286",
                language: "en",
                gender: "unknown",
              },
            },
            {
              fullUrl: "Encounter/60d5cd33-f8ac-40a6-824a-62ff8a9d9e6e",
              resource: {
                resourceType: "Encounter",
                id: "60d5cd33-f8ac-40a6-824a-62ff8a9d9e6e",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/ab1ba858-6fd9-4da0-af62-960053e38286",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/a720354d-bc72-46e7-9429-99e0d16bbc2a",
              resource: {
                resourceType: "List",
                id: "a720354d-bc72-46e7-9429-99e0d16bbc2a",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/ab1ba858-6fd9-4da0-af62-960053e38286",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/60d5cd33-f8ac-40a6-824a-62ff8a9d9e6e",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "MedicationStatement/45438aff-91cf-4fdf-8705-ed38ea5b9809",
                      type: "MedicationStatement",
                      display: "ibuprofen",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "MedicationStatement/45438aff-91cf-4fdf-8705-ed38ea5b9809",
              resource: {
                resourceType: "MedicationStatement",
                id: "45438aff-91cf-4fdf-8705-ed38ea5b9809",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 17 },
                      { url: "length", valueInteger: 9 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "active",
                medicationCodeableConcept: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0020740",
                      display: "ibuprofen",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000019879" },
                    { system: "http://www.whocc.no/atc", code: "M01AE01" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "0046165" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000006519" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "2270-2077" },
                    { system: "http://www.nlm.nih.gov/research/umls/drugbank", code: "DB01050" },
                    { system: "http://www.nlm.nih.gov/research/umls/gs", code: "1611" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh97005926" },
                    { system: "http://loinc.org", code: "LP16165-0" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "40458" },
                    { system: "http://www.nlm.nih.gov/research/umls/mmsl", code: "d00015" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D007052" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthspl", code: "WK2XYI10QM" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C561" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctrp", code: "C561" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_dcp", code: "00803" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_dtp", code: "NSC0256857" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "WK2XYI10QM" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000613511",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nddf", code: "002377" },
                    { system: "http://www.nlm.nih.gov/research/umls/pdq", code: "CDR0000040475" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "x02MO" },
                    { system: "http://www.nlm.nih.gov/research/umls/rxnorm", code: "5640" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "E-7772" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "C-603C0" },
                    { system: "http://snomed.info/sct", code: "387207008" },
                    { system: "http://www.nlm.nih.gov/research/umls/usp", code: "m39860" },
                    { system: "http://www.nlm.nih.gov/research/umls/uspmg", code: "MTHU000060" },
                    { system: "http://hl7.org/fhir/ndfrt", code: "4017840" },
                  ],
                  text: "ibuprofen",
                },
                subject: {
                  reference: "Patient/ab1ba858-6fd9-4da0-af62-960053e38286",
                  type: "Patient",
                },
                context: {
                  reference: "Encounter/60d5cd33-f8ac-40a6-824a-62ff8a9d9e6e",
                  type: "Encounter",
                  display: "unknown",
                },
                dosage: [
                  {
                    text: "100mg",
                    timing: {
                      extension: [
                        {
                          extension: [
                            { url: "documentId" },
                            { url: "offset", valueInteger: 34 },
                            { url: "length", valueInteger: 11 },
                          ],
                          url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                        },
                      ],
                      repeat: { frequency: 2, period: 1, periodUnit: "d" },
                      code: { text: "twice daily" },
                    },
                    doseAndRate: [
                      {
                        extension: [
                          {
                            extension: [
                              { url: "documentId" },
                              { url: "offset", valueInteger: 11 },
                              { url: "length", valueInteger: 5 },
                            ],
                            url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                          },
                        ],
                        doseQuantity: { value: 100 },
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/fe1e2846-3eea-44ed-97e9-1d5e2645999b",
              resource: {
                resourceType: "Practitioner",
                id: "fe1e2846-3eea-44ed-97e9-1d5e2645999b",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0021270" },
              { name: "AOD", entityId: "0000005273" },
              { name: "CCPSS", entityId: "0030805" },
              { name: "CHV", entityId: "0000006675" },
              { name: "DXP", entityId: "U002089" },
              { name: "LCH", entityId: "U002421" },
              { name: "LCH_NW", entityId: "sh85066022" },
              { name: "LNC", entityId: "LA19747-7" },
              { name: "MDR", entityId: "10021731" },
              { name: "MSH", entityId: "D007223" },
              { name: "NCI", entityId: "C27956" },
              { name: "NCI_FDA", entityId: "C27956" },
              { name: "NCI_NICHD", entityId: "C27956" },
              { name: "SNOMEDCT_US", entityId: "133931009" },
            ],
            text: "Baby",
            category: "Age",
            offset: 0,
            length: 4,
            confidenceScore: 0.94,
            normalizedText: "Infant",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0025289" },
              { name: "AOD", entityId: "0000006185" },
              { name: "BI", entityId: "BI00546" },
              { name: "CCPSS", entityId: "1018016" },
              { name: "CCSR_10", entityId: "NVS001" },
              { name: "CCSR_ICD10CM", entityId: "NVS001" },
              { name: "CHV", entityId: "0000007932" },
              { name: "COSTAR", entityId: "478" },
              { name: "CSP", entityId: "2042-5301" },
              { name: "CST", entityId: "MENINGITIS" },
              { name: "DXP", entityId: "U002543" },
              { name: "HPO", entityId: "HP:0001287" },
              { name: "ICD10", entityId: "G03.9" },
              { name: "ICD10AM", entityId: "G03.9" },
              { name: "ICD10CM", entityId: "G03.9" },
              { name: "ICD9CM", entityId: "322.9" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU048434" },
              { name: "ICPC2P", entityId: "N71002" },
              { name: "LCH", entityId: "U002901" },
              { name: "LCH_NW", entityId: "sh85083562" },
              { name: "LNC", entityId: "LP20756-0" },
              { name: "MDR", entityId: "10027199" },
              { name: "MEDCIN", entityId: "31192" },
              { name: "MEDLINEPLUS", entityId: "324" },
              { name: "MSH", entityId: "D008581" },
              { name: "NANDA-I", entityId: "02899" },
              { name: "NCI", entityId: "C26828" },
              { name: "NCI_CPTAC", entityId: "C26828" },
              { name: "NCI_CTCAE", entityId: "E11458" },
              { name: "NCI_FDA", entityId: "2389" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000471780" },
              { name: "NCI_NICHD", entityId: "C26828" },
              { name: "NCI_caDSR", entityId: "C26828" },
              { name: "OMIM", entityId: "MTHU005994" },
              { name: "PSY", entityId: "30660" },
              { name: "RCD", entityId: "X000H" },
              { name: "SNM", entityId: "M-40000" },
              { name: "SNMI", entityId: "DA-10010" },
              { name: "SNOMEDCT_US", entityId: "7180009" },
              { name: "WHO", entityId: "0955" },
            ],
            text: "Meningitis",
            category: "Diagnosis",
            offset: 24,
            length: 10,
            confidenceScore: 1,
            assertion: { certainty: "negativePossible" },
            normalizedText: "Meningitis",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0015967" },
              { name: "AIR", entityId: "FEVER" },
              { name: "AOD", entityId: "0000004396" },
              { name: "BI", entityId: "BI00751" },
              { name: "CCC", entityId: "K25.2" },
              { name: "CCPSS", entityId: "1017166" },
              { name: "CCSR_10", entityId: "SYM002" },
              { name: "CCSR_ICD10CM", entityId: "SYM002" },
              { name: "CHV", entityId: "0000005010" },
              { name: "COSTAR", entityId: "300" },
              { name: "CPM", entityId: "65287" },
              { name: "CSP", entityId: "2871-4310" },
              { name: "CST", entityId: "FEVER" },
              { name: "DXP", entityId: "U001483" },
              { name: "GO", entityId: "GO:0001660" },
              { name: "HPO", entityId: "HP:0001945" },
              { name: "ICD10", entityId: "R50.9" },
              { name: "ICD10AM", entityId: "R50.9" },
              { name: "ICD10CM", entityId: "R50.9" },
              { name: "ICD9CM", entityId: "780.60" },
              { name: "ICNP", entityId: "10041539" },
              { name: "ICPC", entityId: "A03" },
              { name: "ICPC2EENG", entityId: "A03" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU041751" },
              { name: "ICPC2P", entityId: "A03002" },
              { name: "LCH", entityId: "U001776" },
              { name: "LCH_NW", entityId: "sh85047994" },
              { name: "LNC", entityId: "MTHU013518" },
              { name: "MDR", entityId: "10005911" },
              { name: "MEDCIN", entityId: "6005" },
              { name: "MEDLINEPLUS", entityId: "511" },
              { name: "MSH", entityId: "D005334" },
              { name: "MTHICD9", entityId: "780.60" },
              { name: "NANDA-I", entityId: "01128" },
              { name: "NCI", entityId: "C3038" },
              { name: "NCI_CTCAE", entityId: "E11102" },
              { name: "NCI_FDA", entityId: "1858" },
              { name: "NCI_GDC", entityId: "C3038" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000450108" },
              { name: "NCI_NICHD", entityId: "C3038" },
              { name: "NCI_caDSR", entityId: "C3038" },
              { name: "NOC", entityId: "070307" },
              { name: "OMIM", entityId: "MTHU005439" },
              { name: "OMS", entityId: "50.03" },
              { name: "PCDS", entityId: "PRB_11020.02" },
              { name: "PDQ", entityId: "CDR0000775882" },
              { name: "PSY", entityId: "23840" },
              { name: "QMR", entityId: "Q0200115" },
              { name: "RCD", entityId: "X76EI" },
              { name: "SNM", entityId: "F-03003" },
              { name: "SNMI", entityId: "F-03003" },
              { name: "SNOMEDCT_US", entityId: "386661006" },
              { name: "WHO", entityId: "0725" },
            ],
            text: "fever",
            category: "SymptomOrSign",
            offset: 47,
            length: 5,
            confidenceScore: 0.98,
            normalizedText: "Fever",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0026591" },
              { name: "AOD", entityId: "0000027173" },
              { name: "CCPSS", entityId: "U000286" },
              { name: "CHV", entityId: "0000008266" },
              { name: "CSP", entityId: "1124-5492" },
              { name: "HL7V3.0", entityId: "MTH" },
              { name: "LCH", entityId: "U003028" },
              { name: "LCH_NW", entityId: "sh85087526" },
              { name: "LNC", entityId: "LA10417-6" },
              { name: "MSH", entityId: "D009035" },
              { name: "NCI", entityId: "C25189" },
              { name: "NCI_CDISC", entityId: "C25189" },
              { name: "NCI_GDC", entityId: "C25189" },
              { name: "NCI_caDSR", entityId: "C25189" },
              { name: "PSY", entityId: "32140" },
              { name: "RCD", entityId: "X78ym" },
              { name: "SNMI", entityId: "S-10120" },
              { name: "SNOMEDCT_US", entityId: "72705000" },
            ],
            text: "mother",
            category: "FamilyRelation",
            offset: 60,
            length: 6,
            confidenceScore: 0.99,
            normalizedText: "Mother (person)",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0030842" },
              { name: "AOD", entityId: "0000019206" },
              { name: "ATC", entityId: "J01C" },
              { name: "CCPSS", entityId: "0014106" },
              { name: "CHV", entityId: "0000009423" },
              { name: "CSP", entityId: "0199-8025" },
              { name: "GS", entityId: "4011" },
              { name: "LCH", entityId: "U003521" },
              { name: "LCH_NW", entityId: "sh85099402" },
              { name: "LNC", entityId: "LP14319-5" },
              { name: "MEDCIN", entityId: "40319" },
              { name: "MMSL", entityId: "d00116" },
              { name: "MSH", entityId: "D010406" },
              { name: "NCI", entityId: "C1500" },
              { name: "NCI_DTP", entityId: "NSC0402815" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000045296" },
              { name: "NDDF", entityId: "016121" },
              { name: "PSY", entityId: "37190" },
              { name: "RCD", entityId: "x009C" },
              { name: "SNM", entityId: "E-7260" },
              { name: "SNMI", entityId: "C-54000" },
              { name: "SNOMEDCT_US", entityId: "764146007" },
              { name: "VANDF", entityId: "4019880" },
            ],
            text: "Penicillin",
            category: "MedicationName",
            offset: 77,
            length: 10,
            confidenceScore: 0.84,
            assertion: { certainty: "neutralPossible" },
            normalizedText: "penicillins",
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0021270" },
              { name: "AOD", entityId: "0000005273" },
              { name: "CCPSS", entityId: "0030805" },
              { name: "CHV", entityId: "0000006675" },
              { name: "DXP", entityId: "U002089" },
              { name: "LCH", entityId: "U002421" },
              { name: "LCH_NW", entityId: "sh85066022" },
              { name: "LNC", entityId: "LA19747-7" },
              { name: "MDR", entityId: "10021731" },
              { name: "MSH", entityId: "D007223" },
              { name: "NCI", entityId: "C27956" },
              { name: "NCI_FDA", entityId: "C27956" },
              { name: "NCI_NICHD", entityId: "C27956" },
              { name: "SNOMEDCT_US", entityId: "133931009" },
            ],
            text: "baby",
            category: "FamilyRelation",
            offset: 96,
            length: 4,
            confidenceScore: 1,
            normalizedText: "Infant",
          },
        ],
        entityRelations: [],
        id: "2",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "585f5bb9-120f-48dc-b565-22df8524394f",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:585f5bb9-120f-48dc-b565-22df8524394f",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/36b00a90-fd1d-4038-983e-50852b74b917",
              resource: {
                resourceType: "Composition",
                id: "36b00a90-fd1d-4038-983e-50852b74b917",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "11526-1", display: "Pathology study" },
                  ],
                  text: "Pathology study",
                },
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/d8d63b1f-77ca-435d-bd5e-0b8cbeb7cd5d",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Pathology study",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/d8d63b1f-77ca-435d-bd5e-0b8cbeb7cd5d",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>Baby not likely to have Meningitis. in case of fever in the mother, consider Penicillin for the baby too.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/960ef36e-0b2b-481a-bbe3-97e41f5c3141",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
              resource: {
                resourceType: "Patient",
                id: "e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                language: "en",
                gender: "unknown",
              },
            },
            {
              fullUrl: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
              resource: {
                resourceType: "Encounter",
                id: "88541865-0f68-4a0b-bc9e-33d61a366c17",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/960ef36e-0b2b-481a-bbe3-97e41f5c3141",
              resource: {
                resourceType: "List",
                id: "960ef36e-0b2b-481a-bbe3-97e41f5c3141",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "Condition/7213fa9d-830a-4178-b1ce-fd422c05a51b",
                      type: "Condition",
                      display: "Meningitis",
                    },
                  },
                  {
                    item: {
                      reference: "Observation/a0a5a752-8ebd-409a-83e8-58eaf86a9ee3",
                      type: "Observation",
                      display: "fever",
                    },
                  },
                  {
                    item: {
                      reference: "MedicationStatement/7451b887-76fe-4490-8229-24f84633bb9c",
                      type: "MedicationStatement",
                      display: "Penicillin",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "Condition/7213fa9d-830a-4178-b1ce-fd422c05a51b",
              resource: {
                resourceType: "Condition",
                id: "7213fa9d-830a-4178-b1ce-fd422c05a51b",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"],
                },
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 24 },
                      { url: "length", valueInteger: 10 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                verificationStatus: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                      code: "unconfirmed",
                      display: "Unconfirmed",
                    },
                  ],
                  text: "Unconfirmed",
                },
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/condition-category",
                        code: "encounter-diagnosis",
                        display: "Encounter Diagnosis",
                      },
                    ],
                    text: "Encounter Diagnosis",
                  },
                ],
                code: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0025289",
                      display: "Meningitis",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000006185" },
                    { system: "http://www.nlm.nih.gov/research/umls/bi", code: "BI00546" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "1018016" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccsr_10", code: "NVS001" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccsr_icd10cm", code: "NVS001" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000007932" },
                    { system: "http://www.nlm.nih.gov/research/umls/costar", code: "478" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "2042-5301" },
                    { system: "http://www.nlm.nih.gov/research/umls/cst", code: "MENINGITIS" },
                    { system: "http://www.nlm.nih.gov/research/umls/dxp", code: "U002543" },
                    { system: "http://www.nlm.nih.gov/research/umls/hpo", code: "HP:0001287" },
                    { system: "http://hl7.org/fhir/sid/icd-10", code: "G03.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-am", code: "G03.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-cm", code: "G03.9" },
                    { system: "http://hl7.org/fhir/sid/icd-9-cm", code: "322.9" },
                    { system: "http://hl7.org/fhir/sid/icpc2icd10eng", code: "MTHU048434" },
                    { system: "http://hl7.org/fhir/sid/icpc-2p", code: "N71002" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U002901" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85083562" },
                    { system: "http://loinc.org", code: "LP20756-0" },
                    { system: "http://www.nlm.nih.gov/research/umls/mdr", code: "10027199" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "31192" },
                    { system: "http://www.nlm.nih.gov/research/umls/medlineplus", code: "324" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D008581" },
                    { system: "http://www.nlm.nih.gov/research/umls/nanda-i", code: "02899" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C26828" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cptac", code: "C26828" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctcae", code: "E11458" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "2389" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000471780",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_nichd", code: "C26828" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cadsr", code: "C26828" },
                    { system: "http://www.nlm.nih.gov/research/umls/omim", code: "MTHU005994" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "30660" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "X000H" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "M-40000" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "DA-10010" },
                    { system: "http://snomed.info/sct", code: "7180009" },
                    { system: "http://www.nlm.nih.gov/research/umls/who", code: "0955" },
                  ],
                  text: "Meningitis",
                },
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
                  type: "Encounter",
                  display: "unknown",
                },
              },
            },
            {
              fullUrl: "MedicationStatement/7451b887-76fe-4490-8229-24f84633bb9c",
              resource: {
                resourceType: "MedicationStatement",
                id: "7451b887-76fe-4490-8229-24f84633bb9c",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 77 },
                      { url: "length", valueInteger: 10 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "unknown",
                medicationCodeableConcept: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0030842",
                      display: "penicillins",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000019206" },
                    { system: "http://www.whocc.no/atc", code: "J01C" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "0014106" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000009423" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "0199-8025" },
                    { system: "http://www.nlm.nih.gov/research/umls/gs", code: "4011" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U003521" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85099402" },
                    { system: "http://loinc.org", code: "LP14319-5" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "40319" },
                    { system: "http://www.nlm.nih.gov/research/umls/mmsl", code: "d00116" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D010406" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C1500" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_dtp", code: "NSC0402815" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000045296",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nddf", code: "016121" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "37190" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "x009C" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "E-7260" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "C-54000" },
                    { system: "http://snomed.info/sct", code: "764146007" },
                    { system: "http://hl7.org/fhir/ndfrt", code: "4019880" },
                  ],
                  text: "Penicillin",
                },
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
                context: {
                  reference: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
                  type: "Encounter",
                  display: "unknown",
                },
              },
            },
            {
              fullUrl: "Observation/a0a5a752-8ebd-409a-83e8-58eaf86a9ee3",
              resource: {
                resourceType: "Observation",
                id: "a0a5a752-8ebd-409a-83e8-58eaf86a9ee3",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 47 },
                      { url: "length", valueInteger: 5 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/observation-category",
                        code: "exam",
                        display: "Exam",
                      },
                    ],
                    text: "Exam",
                  },
                ],
                code: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0015967",
                      display: "Fever",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/air", code: "FEVER" },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000004396" },
                    { system: "http://www.nlm.nih.gov/research/umls/bi", code: "BI00751" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccc", code: "K25.2" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "1017166" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccsr_10", code: "SYM002" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccsr_icd10cm", code: "SYM002" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000005010" },
                    { system: "http://www.nlm.nih.gov/research/umls/costar", code: "300" },
                    { system: "http://www.nlm.nih.gov/research/umls/cpm", code: "65287" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "2871-4310" },
                    { system: "http://www.nlm.nih.gov/research/umls/cst", code: "FEVER" },
                    { system: "http://www.nlm.nih.gov/research/umls/dxp", code: "U001483" },
                    { system: "http://www.nlm.nih.gov/research/umls/go", code: "GO:0001660" },
                    { system: "http://www.nlm.nih.gov/research/umls/hpo", code: "HP:0001945" },
                    { system: "http://hl7.org/fhir/sid/icd-10", code: "R50.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-am", code: "R50.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-cm", code: "R50.9" },
                    { system: "http://hl7.org/fhir/sid/icd-9-cm", code: "780.60" },
                    { system: "http://www.nlm.nih.gov/research/umls/icnp", code: "10041539" },
                    { system: "http://www.nlm.nih.gov/research/umls/icpc", code: "A03" },
                    { system: "http://www.nlm.nih.gov/research/umls/icpc2eeng", code: "A03" },
                    { system: "http://hl7.org/fhir/sid/icpc2icd10eng", code: "MTHU041751" },
                    { system: "http://hl7.org/fhir/sid/icpc-2p", code: "A03002" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U001776" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85047994" },
                    { system: "http://loinc.org", code: "MTHU013518" },
                    { system: "http://www.nlm.nih.gov/research/umls/mdr", code: "10005911" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "6005" },
                    { system: "http://www.nlm.nih.gov/research/umls/medlineplus", code: "511" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D005334" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthicd9", code: "780.60" },
                    { system: "http://www.nlm.nih.gov/research/umls/nanda-i", code: "01128" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C3038" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctcae", code: "E11102" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "1858" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_gdc", code: "C3038" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000450108",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_nichd", code: "C3038" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cadsr", code: "C3038" },
                    { system: "http://www.nlm.nih.gov/research/umls/noc", code: "070307" },
                    { system: "http://www.nlm.nih.gov/research/umls/omim", code: "MTHU005439" },
                    { system: "http://www.nlm.nih.gov/research/umls/oms", code: "50.03" },
                    { system: "http://www.nlm.nih.gov/research/umls/pcds", code: "PRB_11020.02" },
                    { system: "http://www.nlm.nih.gov/research/umls/pdq", code: "CDR0000775882" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "23840" },
                    { system: "http://www.nlm.nih.gov/research/umls/qmr", code: "Q0200115" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "X76EI" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "F-03003" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "F-03003" },
                    { system: "http://snomed.info/sct", code: "386661006" },
                    { system: "http://www.nlm.nih.gov/research/umls/who", code: "0725" },
                  ],
                  text: "fever",
                },
                subject: {
                  reference: "Patient/e5b0a080-93d2-498a-9bf8-16485a04ebcb",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88541865-0f68-4a0b-bc9e-33d61a366c17",
                  type: "Encounter",
                  display: "unknown",
                },
                interpretation: [
                  {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        code: "POS",
                        display: "Positive",
                      },
                    ],
                    text: "Positive",
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/d8d63b1f-77ca-435d-bd5e-0b8cbeb7cd5d",
              resource: {
                resourceType: "Practitioner",
                id: "d8d63b1f-77ca-435d-bd5e-0b8cbeb7cd5d",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
    ],
    completedOn,
    modelVersion,
  },
];
export const expectation26: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020538" },
              { name: "AOD", entityId: "0000023317" },
              { name: "BI", entityId: "BI00001" },
              { name: "CCPSS", entityId: "1017493" },
              { name: "CCS", entityId: "7.1" },
              { name: "CHV", entityId: "0000015800" },
              { name: "COSTAR", entityId: "397" },
              { name: "CSP", entityId: "0571-5243" },
              { name: "CST", entityId: "HYPERTENS" },
              { name: "DXP", entityId: "U002034" },
              { name: "HPO", entityId: "HP:0000822" },
              { name: "ICD10", entityId: "I10-I15.9" },
              { name: "ICD10AM", entityId: "I10-I15.9" },
              { name: "ICD10CM", entityId: "I10" },
              { name: "ICD9CM", entityId: "997.91" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU035456" },
              { name: "ICPC2P", entityId: "K85004" },
              { name: "LCH", entityId: "U002317" },
              { name: "LCH_NW", entityId: "sh85063723" },
              { name: "LNC", entityId: "LA14293-7" },
              { name: "MDR", entityId: "10020772" },
              { name: "MEDCIN", entityId: "33288" },
              { name: "MEDLINEPLUS", entityId: "34" },
              { name: "MSH", entityId: "D006973" },
              { name: "MTH", entityId: "005" },
              { name: "MTHICD9", entityId: "997.91" },
              { name: "NANDA-I", entityId: "00905" },
              { name: "NCI", entityId: "C3117" },
              { name: "NCI_CPTAC", entityId: "C3117" },
              { name: "NCI_CTCAE", entityId: "E13785" },
              { name: "NCI_CTRP", entityId: "C3117" },
              { name: "NCI_FDA", entityId: "1908" },
              { name: "NCI_GDC", entityId: "C3117" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000458091" },
              { name: "NCI_NICHD", entityId: "C3117" },
              { name: "NCI_caDSR", entityId: "C3117" },
              { name: "NOC", entityId: "060808" },
              { name: "OMIM", entityId: "MTHU002068" },
              { name: "PCDS", entityId: "PRB_11000.06" },
              { name: "PDQ", entityId: "CDR0000686951" },
              { name: "PSY", entityId: "23830" },
              { name: "RCD", entityId: "XE0Ub" },
              { name: "SNM", entityId: "F-70700" },
              { name: "SNMI", entityId: "D3-02000" },
              { name: "SNOMEDCT_US", entityId: "38341003" },
              { name: "WHO", entityId: "0210" },
            ],
            text: "high blood pressure",
            category: "SymptomOrSign",
            offset: 29,
            length: 19,
            confidenceScore: 1,
            assertion: { certainty: "negative" },
            normalizedText: "Hypertensive disease",
          },
        ],
        entityRelations: [],
        id: "0",
        warnings: [],
      },
      {
        entities: [
          {
            dataSources: [],
            text: "100mg",
            category: "Dosage",
            offset: 11,
            length: 5,
            confidenceScore: 0.98,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 17,
            length: 9,
            confidenceScore: 1,
            normalizedText: "ibuprofen",
          },
          {
            dataSources: [],
            text: "twice daily",
            category: "Frequency",
            offset: 34,
            length: 11,
            confidenceScore: 1,
          },
        ],
        entityRelations: [
          {
            relationType: "DosageOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [],
                  text: "100mg",
                  category: "Dosage",
                  offset: 11,
                  length: 5,
                  confidenceScore: 0.98,
                },
                name: "Dosage",
              },
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
            ],
          },
          {
            relationType: "FrequencyOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
              {
                entity: {
                  dataSources: [],
                  text: "twice daily",
                  category: "Frequency",
                  offset: 34,
                  length: 11,
                  confidenceScore: 1,
                },
                name: "Frequency",
              },
            ],
          },
        ],
        id: "1",
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [
          { text: "Patient", category: "PersonType", offset: 0, length: 7, confidenceScore: 0.99 },
        ],
      },
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "100mg",
            category: "Quantity",
            subCategory: "Dimension",
            offset: 11,
            length: 5,
            confidenceScore: 0.8,
          },
          { text: "ibuprofen", category: "Product", offset: 17, length: 9, confidenceScore: 0.89 },
          {
            text: "daily",
            category: "DateTime",
            subCategory: "Set",
            offset: 40,
            length: 5,
            confidenceScore: 0.8,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText: "******* does not suffer from high blood pressure.",
        entities: [
          { text: "Patient", category: "PersonType", offset: 0, length: 7, confidenceScore: 0.94 },
        ],
      },
      {
        id: "1",
        warnings: [],
        redactedText: "Prescribed 100mg ibuprofen, taken twice *****.",
        entities: [
          {
            text: "daily",
            category: "DateTime",
            subCategory: "Set",
            offset: 40,
            length: 5,
            confidenceScore: 0.8,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "SentimentAnalysis",
    results: [
      {
        id: "0",
        warnings: [],
        sentiment: "neutral",
        confidenceScores: { positive: 0.46, neutral: 0.5, negative: 0.05 },
        sentences: [
          {
            text: "Patient does not suffer from high blood pressure.",
            sentiment: "neutral",
            confidenceScores: { positive: 0.46, neutral: 0.5, negative: 0.05 },
            offset: 0,
            length: 49,
            opinions: [],
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentiment: "neutral",
        confidenceScores: { positive: 0.01, neutral: 0.99, negative: 0 },
        sentences: [
          {
            text: "Prescribed 100mg ibuprofen, taken twice daily.",
            sentiment: "neutral",
            confidenceScores: { positive: 0.01, neutral: 0.99, negative: 0 },
            offset: 0,
            length: 46,
            opinions: [],
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation27: AnalyzeBatchResult[] = [
  {
    kind: "ExtractiveSummarization",
    results: [
      {
        id: "0",
        warnings: [],
        sentences: [
          {
            text: "Windows is already accessible in the cloud via Azure Virtual Desktop, which offers customers flexibility to create and run their own virtualization service.",
            rankScore: 0.43,
            offset: 2453,
            length: 156,
          },
          {
            text: "Windows 365 is a new virtualization technology for Windows that is easy to set up and deploy for today’s login-from-anywhere, mobile and elastic workforces.",
            rankScore: 1,
            offset: 2610,
            length: 156,
          },
          {
            text: "With Windows 365, she added, IT admins can manage and deploy Cloud PCs using the same tools they use today to manage physical PCs.",
            rankScore: 0.25,
            offset: 3161,
            length: 130,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentences: [
          {
            text: "Windows 365 was in the works before COVID-19 sent companies around the world on a scramble to secure solutions to support employees suddenly forced to work from home, but “what really put the firecracker behind it was the pandemic, it accelerated everything,” McKelvey said.",
            rankScore: 0.79,
            offset: 10,
            length: 274,
          },
          {
            text: "In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account.",
            rankScore: 0.84,
            offset: 479,
            length: 224,
          },
          {
            text: "The ability to login to a Cloud PC from anywhere on any device is part of Microsoft’s larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future, she added.",
            rankScore: 1,
            offset: 1102,
            length: 234,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation28: AnalyzeBatchResult[] = [
  {
    kind: "ExtractiveSummarization",
    results: [
      {
        id: "0",
        warnings: [],
        sentences: [
          {
            text: "Windows is already accessible in the cloud via Azure Virtual Desktop, which offers customers flexibility to create and run their own virtualization service.",
            rankScore: 0.43,
            offset: 2453,
            length: 156,
          },
          {
            text: "Windows 365 is a new virtualization technology for Windows that is easy to set up and deploy for today’s login-from-anywhere, mobile and elastic workforces.",
            rankScore: 1,
            offset: 2610,
            length: 156,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentences: [
          {
            text: "In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account.",
            rankScore: 0.84,
            offset: 479,
            length: 224,
          },
          {
            text: "The ability to login to a Cloud PC from anywhere on any device is part of Microsoft’s larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future, she added.",
            rankScore: 1,
            offset: 1102,
            length: 234,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation29: AnalyzeBatchResult[] = [
  {
    kind: "ExtractiveSummarization",
    results: [
      {
        id: "0",
        warnings: [],
        sentences: [
          {
            text: "Windows 365 is a new virtualization technology for Windows that is easy to set up and deploy for today’s login-from-anywhere, mobile and elastic workforces.",
            rankScore: 1,
            offset: 2610,
            length: 156,
          },
          {
            text: "Windows is already accessible in the cloud via Azure Virtual Desktop, which offers customers flexibility to create and run their own virtualization service.",
            rankScore: 0.43,
            offset: 2453,
            length: 156,
          },
          {
            text: "With Windows 365, she added, IT admins can manage and deploy Cloud PCs using the same tools they use today to manage physical PCs.",
            rankScore: 0.25,
            offset: 3161,
            length: 130,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentences: [
          {
            text: "The ability to login to a Cloud PC from anywhere on any device is part of Microsoft’s larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future, she added.",
            rankScore: 1,
            offset: 1102,
            length: 234,
          },
          {
            text: "In this new world of Windows 365, remote workers flip the lid on their laptop, bootup the family workstation or clip a keyboard onto a tablet, launch a native app or modern web browser and login to their Windows 365 account.",
            rankScore: 0.84,
            offset: 479,
            length: 224,
          },
          {
            text: "Windows 365 was in the works before COVID-19 sent companies around the world on a scramble to secure solutions to support employees suddenly forced to work from home, but “what really put the firecracker behind it was the pandemic, it accelerated everything,” McKelvey said.",
            rankScore: 0.79,
            offset: 10,
            length: 274,
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation30: AnalyzeBatchResult[] = [
  {
    kind: "AbstractiveSummarization",
    results: [
      {
        id: "0",
        summaries: [
          {
            text: "Microsoft is releasing Windows 365, a new operating system that is easy to set up and deploy for today’s login-from- anywhere, mobile and elastic workforces. The Cloud PC is a new virtualization technology for Windows that is easier to set Up and Deploy for today's login. The Cloud PCs are accessible through a native application or web browser on any device, from anywhere with an internet connection.",
            contexts: [{ offset: 0, length: 7519 }],
          },
        ],
        warnings: [],
      },
      {
        id: "1",
        summaries: [
          {
            text: "Microsoft is rolling out Windows 365 Cloud PCs for employees forced to work from home. The ability to login to a Cloud PC from anywhere on any device is part of a larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future.",
            contexts: [{ offset: 0, length: 3416 }],
          },
        ],
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation31: AnalyzeBatchResult[] = [
  {
    kind: "AbstractiveSummarization",
    results: [
      {
        id: "0",
        summaries: [
          {
            text: "Microsoft is releasing Windows 365, a new operating system that is easy to set up and deploy for today’s login-from- anywhere, mobile and elastic workforces. The Cloud PC is a new virtualization technology for Windows that is easier to set Up and Deploy for today's login. The Cloud PCs are accessible through a native application or web browser on any device, from anywhere with an internet connection.",
            contexts: [{ offset: 0, length: 7519 }],
          },
        ],
        warnings: [],
      },
      {
        id: "1",
        summaries: [
          {
            text: "Microsoft is rolling out Windows 365 Cloud PCs for employees forced to work from home. The ability to login to a Cloud PC from anywhere on any device is part of a larger strategy around tailoring products such as Microsoft Teams and Microsoft 365 for the post-pandemic hybrid workforce of the future.",
            contexts: [{ offset: 0, length: 3416 }],
          },
        ],
        warnings: [],
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation32: AnalyzeBatchResult[] = [
  {
    kind: "Healthcare",
    results: [
      {
        entities: [
          {
            dataSources: [],
            text: "54-year-old",
            category: "Age",
            offset: 17,
            length: 11,
            confidenceScore: 1,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0025266" },
              { name: "AOD", entityId: "0000026918" },
              { name: "CHV", entityId: "0000007919" },
              { name: "LCH", entityId: "U002897" },
              { name: "LCH_NW", entityId: "sh85083510" },
              { name: "MEDLINEPLUS", entityId: "24" },
              { name: "MSH", entityId: "D008571" },
              { name: "NCI", entityId: "C14366" },
              { name: "PSY", entityId: "30625" },
              { name: "SNOMEDCT_US", entityId: "339947000" },
            ],
            text: "gentleman",
            category: "Gender",
            offset: 29,
            length: 9,
            confidenceScore: 1,
            normalizedText: "Male population group",
          },
          {
            dataSources: [],
            text: "progressive",
            category: "Course",
            offset: 57,
            length: 11,
            confidenceScore: 0.9,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0002962" },
              { name: "AOD", entityId: "0000005330" },
              { name: "BI", entityId: "BI00047" },
              { name: "CCPSS", entityId: "1017852" },
              { name: "CCS", entityId: "7.2.4.1" },
              { name: "CHV", entityId: "0000001165" },
              { name: "COSTAR", entityId: "054" },
              { name: "CSP", entityId: "1393-3407" },
              { name: "CST", entityId: "ANGINA PECTORIS" },
              { name: "DXP", entityId: "U000113" },
              { name: "HPO", entityId: "HP:0001681" },
              { name: "ICD10", entityId: "I20.9" },
              { name: "ICD10AM", entityId: "I20.9" },
              { name: "ICD10CM", entityId: "I20.9" },
              { name: "ICD9CM", entityId: "413" },
              { name: "ICPC", entityId: "K74" },
              { name: "ICPC2EENG", entityId: "K74" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU006338" },
              { name: "ICPC2P", entityId: "K74001" },
              { name: "LCH", entityId: "U000244" },
              { name: "LCH_NW", entityId: "sh85005022" },
              { name: "LNC", entityId: "LA14275-4" },
              { name: "MDR", entityId: "10002383" },
              { name: "MEDCIN", entityId: "33215" },
              { name: "MEDLINEPLUS", entityId: "142" },
              { name: "MSH", entityId: "D000787" },
              { name: "MTH", entityId: "053" },
              { name: "MTHICD9", entityId: "413.9" },
              { name: "MTHICPC2EAE", entityId: "K74" },
              { name: "NCI", entityId: "C51221" },
              { name: "NCI_CTCAE", entityId: "E10110" },
              { name: "NCI_FDA", entityId: "1710" },
              { name: "NCI_NICHD", entityId: "C51221" },
              { name: "NOC", entityId: "040504" },
              { name: "OMIM", entityId: "MTHU009903" },
              { name: "OMS", entityId: "29.13" },
              { name: "PCDS", entityId: "PRB_02040.07" },
              { name: "PSY", entityId: "02530" },
              { name: "QMR", entityId: "Q0300326" },
              { name: "RCD", entityId: "G33.." },
              { name: "RCDAE", entityId: "Ua1eH" },
              { name: "SNM", entityId: "F-71500" },
              { name: "SNMI", entityId: "D3-12000" },
              { name: "SNOMEDCT_US", entityId: "194828000" },
              { name: "WHO", entityId: "0422" },
            ],
            text: "angina",
            category: "SymptomOrSign",
            offset: 69,
            length: 6,
            confidenceScore: 0.83,
            normalizedText: "Angina Pectoris",
          },
          {
            dataSources: [],
            text: "past several months",
            category: "Time",
            offset: 85,
            length: 19,
            confidenceScore: 0.99,
          },
        ],
        entityRelations: [
          {
            relationType: "CourseOfCondition",
            confidenceScore: 0.84,
            roles: [
              {
                entity: {
                  dataSources: [],
                  text: "progressive",
                  category: "Course",
                  offset: 57,
                  length: 11,
                  confidenceScore: 0.9,
                },
                name: "Course",
              },
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0002962" },
                    { name: "AOD", entityId: "0000005330" },
                    { name: "BI", entityId: "BI00047" },
                    { name: "CCPSS", entityId: "1017852" },
                    { name: "CCS", entityId: "7.2.4.1" },
                    { name: "CHV", entityId: "0000001165" },
                    { name: "COSTAR", entityId: "054" },
                    { name: "CSP", entityId: "1393-3407" },
                    { name: "CST", entityId: "ANGINA PECTORIS" },
                    { name: "DXP", entityId: "U000113" },
                    { name: "HPO", entityId: "HP:0001681" },
                    { name: "ICD10", entityId: "I20.9" },
                    { name: "ICD10AM", entityId: "I20.9" },
                    { name: "ICD10CM", entityId: "I20.9" },
                    { name: "ICD9CM", entityId: "413" },
                    { name: "ICPC", entityId: "K74" },
                    { name: "ICPC2EENG", entityId: "K74" },
                    { name: "ICPC2ICD10ENG", entityId: "MTHU006338" },
                    { name: "ICPC2P", entityId: "K74001" },
                    { name: "LCH", entityId: "U000244" },
                    { name: "LCH_NW", entityId: "sh85005022" },
                    { name: "LNC", entityId: "LA14275-4" },
                    { name: "MDR", entityId: "10002383" },
                    { name: "MEDCIN", entityId: "33215" },
                    { name: "MEDLINEPLUS", entityId: "142" },
                    { name: "MSH", entityId: "D000787" },
                    { name: "MTH", entityId: "053" },
                    { name: "MTHICD9", entityId: "413.9" },
                    { name: "MTHICPC2EAE", entityId: "K74" },
                    { name: "NCI", entityId: "C51221" },
                    { name: "NCI_CTCAE", entityId: "E10110" },
                    { name: "NCI_FDA", entityId: "1710" },
                    { name: "NCI_NICHD", entityId: "C51221" },
                    { name: "NOC", entityId: "040504" },
                    { name: "OMIM", entityId: "MTHU009903" },
                    { name: "OMS", entityId: "29.13" },
                    { name: "PCDS", entityId: "PRB_02040.07" },
                    { name: "PSY", entityId: "02530" },
                    { name: "QMR", entityId: "Q0300326" },
                    { name: "RCD", entityId: "G33.." },
                    { name: "RCDAE", entityId: "Ua1eH" },
                    { name: "SNM", entityId: "F-71500" },
                    { name: "SNMI", entityId: "D3-12000" },
                    { name: "SNOMEDCT_US", entityId: "194828000" },
                    { name: "WHO", entityId: "0422" },
                  ],
                  text: "angina",
                  category: "SymptomOrSign",
                  offset: 69,
                  length: 6,
                  confidenceScore: 0.83,
                  normalizedText: "Angina Pectoris",
                },
                name: "Condition",
              },
            ],
          },
          {
            relationType: "TimeOfCondition",
            confidenceScore: 0.89,
            roles: [
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0002962" },
                    { name: "AOD", entityId: "0000005330" },
                    { name: "BI", entityId: "BI00047" },
                    { name: "CCPSS", entityId: "1017852" },
                    { name: "CCS", entityId: "7.2.4.1" },
                    { name: "CHV", entityId: "0000001165" },
                    { name: "COSTAR", entityId: "054" },
                    { name: "CSP", entityId: "1393-3407" },
                    { name: "CST", entityId: "ANGINA PECTORIS" },
                    { name: "DXP", entityId: "U000113" },
                    { name: "HPO", entityId: "HP:0001681" },
                    { name: "ICD10", entityId: "I20.9" },
                    { name: "ICD10AM", entityId: "I20.9" },
                    { name: "ICD10CM", entityId: "I20.9" },
                    { name: "ICD9CM", entityId: "413" },
                    { name: "ICPC", entityId: "K74" },
                    { name: "ICPC2EENG", entityId: "K74" },
                    { name: "ICPC2ICD10ENG", entityId: "MTHU006338" },
                    { name: "ICPC2P", entityId: "K74001" },
                    { name: "LCH", entityId: "U000244" },
                    { name: "LCH_NW", entityId: "sh85005022" },
                    { name: "LNC", entityId: "LA14275-4" },
                    { name: "MDR", entityId: "10002383" },
                    { name: "MEDCIN", entityId: "33215" },
                    { name: "MEDLINEPLUS", entityId: "142" },
                    { name: "MSH", entityId: "D000787" },
                    { name: "MTH", entityId: "053" },
                    { name: "MTHICD9", entityId: "413.9" },
                    { name: "MTHICPC2EAE", entityId: "K74" },
                    { name: "NCI", entityId: "C51221" },
                    { name: "NCI_CTCAE", entityId: "E10110" },
                    { name: "NCI_FDA", entityId: "1710" },
                    { name: "NCI_NICHD", entityId: "C51221" },
                    { name: "NOC", entityId: "040504" },
                    { name: "OMIM", entityId: "MTHU009903" },
                    { name: "OMS", entityId: "29.13" },
                    { name: "PCDS", entityId: "PRB_02040.07" },
                    { name: "PSY", entityId: "02530" },
                    { name: "QMR", entityId: "Q0300326" },
                    { name: "RCD", entityId: "G33.." },
                    { name: "RCDAE", entityId: "Ua1eH" },
                    { name: "SNM", entityId: "F-71500" },
                    { name: "SNMI", entityId: "D3-12000" },
                    { name: "SNOMEDCT_US", entityId: "194828000" },
                    { name: "WHO", entityId: "0422" },
                  ],
                  text: "angina",
                  category: "SymptomOrSign",
                  offset: 69,
                  length: 6,
                  confidenceScore: 0.83,
                  normalizedText: "Angina Pectoris",
                },
                name: "Condition",
              },
              {
                entity: {
                  dataSources: [],
                  text: "past several months",
                  category: "Time",
                  offset: 85,
                  length: 19,
                  confidenceScore: 0.99,
                },
                name: "Time",
              },
            ],
          },
        ],
        id: "0",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "393947ea-15ef-480d-9050-fc6fe98eb447",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:393947ea-15ef-480d-9050-fc6fe98eb447",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/055b71da-bbe9-4016-8626-86adfa203bd5",
              resource: {
                resourceType: "Composition",
                id: "055b71da-bbe9-4016-8626-86adfa203bd5",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "18842-5", display: "Discharge summary" },
                  ],
                  text: "Discharge summary",
                },
                subject: {
                  reference: "Patient/2fde11d0-6831-4a77-bb72-ab1829404f5f",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/81aed2bf-4ede-4236-b4b6-113656db6dc8",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/49574a15-b75f-4ec8-81c3-41a8386fe02e",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Discharge summary",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/49574a15-b75f-4ec8-81c3-41a8386fe02e",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>The patient is a 54-year-old gentleman with a history of progressive angina over the past several months.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/dfea5648-c911-41a3-adeb-e0f8431b96ef",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/2fde11d0-6831-4a77-bb72-ab1829404f5f",
              resource: {
                resourceType: "Patient",
                id: "2fde11d0-6831-4a77-bb72-ab1829404f5f",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 29 },
                      { url: "length", valueInteger: 9 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                gender: "male",
              },
            },
            {
              fullUrl: "Encounter/81aed2bf-4ede-4236-b4b6-113656db6dc8",
              resource: {
                resourceType: "Encounter",
                id: "81aed2bf-4ede-4236-b4b6-113656db6dc8",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/2fde11d0-6831-4a77-bb72-ab1829404f5f",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/dfea5648-c911-41a3-adeb-e0f8431b96ef",
              resource: {
                resourceType: "List",
                id: "dfea5648-c911-41a3-adeb-e0f8431b96ef",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/2fde11d0-6831-4a77-bb72-ab1829404f5f",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/81aed2bf-4ede-4236-b4b6-113656db6dc8",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "Observation/b87e8a3d-7464-4116-b69d-797687aba3ab",
                      type: "Observation",
                      display: "angina",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "Observation/b87e8a3d-7464-4116-b69d-797687aba3ab",
              resource: {
                resourceType: "Observation",
                id: "b87e8a3d-7464-4116-b69d-797687aba3ab",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 69 },
                      { url: "length", valueInteger: 6 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/observation-category",
                        code: "exam",
                        display: "Exam",
                      },
                    ],
                    text: "Exam",
                  },
                ],
                code: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0002962",
                      display: "Angina Pectoris",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000005330" },
                    { system: "http://www.nlm.nih.gov/research/umls/bi", code: "BI00047" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "1017852" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccs", code: "7.2.4.1" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000001165" },
                    { system: "http://www.nlm.nih.gov/research/umls/costar", code: "054" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "1393-3407" },
                    { system: "http://www.nlm.nih.gov/research/umls/cst", code: "ANGINA PECTORIS" },
                    { system: "http://www.nlm.nih.gov/research/umls/dxp", code: "U000113" },
                    { system: "http://www.nlm.nih.gov/research/umls/hpo", code: "HP:0001681" },
                    { system: "http://hl7.org/fhir/sid/icd-10", code: "I20.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-am", code: "I20.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-cm", code: "I20.9" },
                    { system: "http://hl7.org/fhir/sid/icd-9-cm", code: "413" },
                    { system: "http://www.nlm.nih.gov/research/umls/icpc", code: "K74" },
                    { system: "http://www.nlm.nih.gov/research/umls/icpc2eeng", code: "K74" },
                    { system: "http://hl7.org/fhir/sid/icpc2icd10eng", code: "MTHU006338" },
                    { system: "http://hl7.org/fhir/sid/icpc-2p", code: "K74001" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U000244" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85005022" },
                    { system: "http://loinc.org", code: "LA14275-4" },
                    { system: "http://www.nlm.nih.gov/research/umls/mdr", code: "10002383" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "33215" },
                    { system: "http://www.nlm.nih.gov/research/umls/medlineplus", code: "142" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D000787" },
                    { system: "http://www.nlm.nih.gov/research/umls/mth", code: "053" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthicd9", code: "413.9" },
                    { system: "http://hl7.org/fhir/sid/mthicpc2eae", code: "K74" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C51221" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctcae", code: "E10110" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "1710" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_nichd", code: "C51221" },
                    { system: "http://www.nlm.nih.gov/research/umls/noc", code: "040504" },
                    { system: "http://www.nlm.nih.gov/research/umls/omim", code: "MTHU009903" },
                    { system: "http://www.nlm.nih.gov/research/umls/oms", code: "29.13" },
                    { system: "http://www.nlm.nih.gov/research/umls/pcds", code: "PRB_02040.07" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "02530" },
                    { system: "http://www.nlm.nih.gov/research/umls/qmr", code: "Q0300326" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "G33.." },
                    { system: "http://www.nlm.nih.gov/research/umls/rcdae", code: "Ua1eH" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "F-71500" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "D3-12000" },
                    { system: "http://snomed.info/sct", code: "194828000" },
                    { system: "http://www.nlm.nih.gov/research/umls/who", code: "0422" },
                  ],
                  text: "angina",
                },
                subject: {
                  reference: "Patient/2fde11d0-6831-4a77-bb72-ab1829404f5f",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/81aed2bf-4ede-4236-b4b6-113656db6dc8",
                  type: "Encounter",
                  display: "unknown",
                },
                effectiveTiming: {
                  extension: [
                    {
                      extension: [
                        { url: "documentId" },
                        { url: "offset", valueInteger: 85 },
                        { url: "length", valueInteger: 19 },
                      ],
                      url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                    },
                  ],
                  repeat: { duration: 1, durationUnit: "mo" },
                  code: { text: "past several months" },
                },
                interpretation: [
                  {
                    extension: [
                      {
                        extension: [
                          { url: "documentId" },
                          { url: "offset", valueInteger: 57 },
                          { url: "length", valueInteger: 11 },
                        ],
                        url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                      },
                    ],
                    text: "progressive",
                  },
                  {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        code: "POS",
                        display: "Positive",
                      },
                    ],
                    text: "Positive",
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/49574a15-b75f-4ec8-81c3-41a8386fe02e",
              resource: {
                resourceType: "Practitioner",
                id: "49574a15-b75f-4ec8-81c3-41a8386fe02e",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
      {
        entities: [
          {
            dataSources: [],
            text: "100mg",
            category: "Dosage",
            offset: 11,
            length: 5,
            confidenceScore: 0.98,
          },
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020740" },
              { name: "AOD", entityId: "0000019879" },
              { name: "ATC", entityId: "M01AE01" },
              { name: "CCPSS", entityId: "0046165" },
              { name: "CHV", entityId: "0000006519" },
              { name: "CSP", entityId: "2270-2077" },
              { name: "DRUGBANK", entityId: "DB01050" },
              { name: "GS", entityId: "1611" },
              { name: "LCH_NW", entityId: "sh97005926" },
              { name: "LNC", entityId: "LP16165-0" },
              { name: "MEDCIN", entityId: "40458" },
              { name: "MMSL", entityId: "d00015" },
              { name: "MSH", entityId: "D007052" },
              { name: "MTHSPL", entityId: "WK2XYI10QM" },
              { name: "NCI", entityId: "C561" },
              { name: "NCI_CTRP", entityId: "C561" },
              { name: "NCI_DCP", entityId: "00803" },
              { name: "NCI_DTP", entityId: "NSC0256857" },
              { name: "NCI_FDA", entityId: "WK2XYI10QM" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
              { name: "NDDF", entityId: "002377" },
              { name: "PDQ", entityId: "CDR0000040475" },
              { name: "RCD", entityId: "x02MO" },
              { name: "RXNORM", entityId: "5640" },
              { name: "SNM", entityId: "E-7772" },
              { name: "SNMI", entityId: "C-603C0" },
              { name: "SNOMEDCT_US", entityId: "387207008" },
              { name: "USP", entityId: "m39860" },
              { name: "USPMG", entityId: "MTHU000060" },
              { name: "VANDF", entityId: "4017840" },
            ],
            text: "ibuprofen",
            category: "MedicationName",
            offset: 17,
            length: 9,
            confidenceScore: 1,
            normalizedText: "ibuprofen",
          },
          {
            dataSources: [],
            text: "twice daily",
            category: "Frequency",
            offset: 34,
            length: 11,
            confidenceScore: 1,
          },
        ],
        entityRelations: [
          {
            relationType: "DosageOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [],
                  text: "100mg",
                  category: "Dosage",
                  offset: 11,
                  length: 5,
                  confidenceScore: 0.98,
                },
                name: "Dosage",
              },
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
            ],
          },
          {
            relationType: "FrequencyOfMedication",
            confidenceScore: 1,
            roles: [
              {
                entity: {
                  dataSources: [
                    { name: "UMLS", entityId: "C0020740" },
                    { name: "AOD", entityId: "0000019879" },
                    { name: "ATC", entityId: "M01AE01" },
                    { name: "CCPSS", entityId: "0046165" },
                    { name: "CHV", entityId: "0000006519" },
                    { name: "CSP", entityId: "2270-2077" },
                    { name: "DRUGBANK", entityId: "DB01050" },
                    { name: "GS", entityId: "1611" },
                    { name: "LCH_NW", entityId: "sh97005926" },
                    { name: "LNC", entityId: "LP16165-0" },
                    { name: "MEDCIN", entityId: "40458" },
                    { name: "MMSL", entityId: "d00015" },
                    { name: "MSH", entityId: "D007052" },
                    { name: "MTHSPL", entityId: "WK2XYI10QM" },
                    { name: "NCI", entityId: "C561" },
                    { name: "NCI_CTRP", entityId: "C561" },
                    { name: "NCI_DCP", entityId: "00803" },
                    { name: "NCI_DTP", entityId: "NSC0256857" },
                    { name: "NCI_FDA", entityId: "WK2XYI10QM" },
                    { name: "NCI_NCI-GLOSS", entityId: "CDR0000613511" },
                    { name: "NDDF", entityId: "002377" },
                    { name: "PDQ", entityId: "CDR0000040475" },
                    { name: "RCD", entityId: "x02MO" },
                    { name: "RXNORM", entityId: "5640" },
                    { name: "SNM", entityId: "E-7772" },
                    { name: "SNMI", entityId: "C-603C0" },
                    { name: "SNOMEDCT_US", entityId: "387207008" },
                    { name: "USP", entityId: "m39860" },
                    { name: "USPMG", entityId: "MTHU000060" },
                    { name: "VANDF", entityId: "4017840" },
                  ],
                  text: "ibuprofen",
                  category: "MedicationName",
                  offset: 17,
                  length: 9,
                  confidenceScore: 1,
                  normalizedText: "ibuprofen",
                },
                name: "Medication",
              },
              {
                entity: {
                  dataSources: [],
                  text: "twice daily",
                  category: "Frequency",
                  offset: 34,
                  length: 11,
                  confidenceScore: 1,
                },
                name: "Frequency",
              },
            ],
          },
        ],
        id: "1",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "9ea22165-5408-42bf-8102-1276bc188dac",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:9ea22165-5408-42bf-8102-1276bc188dac",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/be3e1d6e-a161-47c0-a40f-d7831962e8f6",
              resource: {
                resourceType: "Composition",
                id: "be3e1d6e-a161-47c0-a40f-d7831962e8f6",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "18842-5", display: "Discharge summary" },
                  ],
                  text: "Discharge summary",
                },
                subject: {
                  reference: "Patient/3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/19bdd7be-b4ff-4973-8db7-9d6bc4eef95c",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/90018f0a-a529-4336-af91-290e54271bd7",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Discharge summary",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/90018f0a-a529-4336-af91-290e54271bd7",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>Prescribed 100mg ibuprofen, taken twice daily.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/954e5c41-fe8f-4354-a931-f1b1f4dfd2d1",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
              resource: {
                resourceType: "Patient",
                id: "3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
                language: "en",
                gender: "unknown",
              },
            },
            {
              fullUrl: "Encounter/19bdd7be-b4ff-4973-8db7-9d6bc4eef95c",
              resource: {
                resourceType: "Encounter",
                id: "19bdd7be-b4ff-4973-8db7-9d6bc4eef95c",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/954e5c41-fe8f-4354-a931-f1b1f4dfd2d1",
              resource: {
                resourceType: "List",
                id: "954e5c41-fe8f-4354-a931-f1b1f4dfd2d1",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/19bdd7be-b4ff-4973-8db7-9d6bc4eef95c",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "MedicationStatement/a1cfdf79-247e-44f2-9e45-532301b66a39",
                      type: "MedicationStatement",
                      display: "ibuprofen",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "MedicationStatement/a1cfdf79-247e-44f2-9e45-532301b66a39",
              resource: {
                resourceType: "MedicationStatement",
                id: "a1cfdf79-247e-44f2-9e45-532301b66a39",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 17 },
                      { url: "length", valueInteger: 9 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "active",
                medicationCodeableConcept: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0020740",
                      display: "ibuprofen",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000019879" },
                    { system: "http://www.whocc.no/atc", code: "M01AE01" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "0046165" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000006519" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "2270-2077" },
                    { system: "http://www.nlm.nih.gov/research/umls/drugbank", code: "DB01050" },
                    { system: "http://www.nlm.nih.gov/research/umls/gs", code: "1611" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh97005926" },
                    { system: "http://loinc.org", code: "LP16165-0" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "40458" },
                    { system: "http://www.nlm.nih.gov/research/umls/mmsl", code: "d00015" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D007052" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthspl", code: "WK2XYI10QM" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C561" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctrp", code: "C561" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_dcp", code: "00803" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_dtp", code: "NSC0256857" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "WK2XYI10QM" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000613511",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nddf", code: "002377" },
                    { system: "http://www.nlm.nih.gov/research/umls/pdq", code: "CDR0000040475" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "x02MO" },
                    { system: "http://www.nlm.nih.gov/research/umls/rxnorm", code: "5640" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "E-7772" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "C-603C0" },
                    { system: "http://snomed.info/sct", code: "387207008" },
                    { system: "http://www.nlm.nih.gov/research/umls/usp", code: "m39860" },
                    { system: "http://www.nlm.nih.gov/research/umls/uspmg", code: "MTHU000060" },
                    { system: "http://hl7.org/fhir/ndfrt", code: "4017840" },
                  ],
                  text: "ibuprofen",
                },
                subject: {
                  reference: "Patient/3a4c3a21-cebd-4810-a73c-33a80e4af0c2",
                  type: "Patient",
                },
                context: {
                  reference: "Encounter/19bdd7be-b4ff-4973-8db7-9d6bc4eef95c",
                  type: "Encounter",
                  display: "unknown",
                },
                dosage: [
                  {
                    text: "100mg",
                    timing: {
                      extension: [
                        {
                          extension: [
                            { url: "documentId" },
                            { url: "offset", valueInteger: 34 },
                            { url: "length", valueInteger: 11 },
                          ],
                          url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                        },
                      ],
                      repeat: { frequency: 2, period: 1, periodUnit: "d" },
                      code: { text: "twice daily" },
                    },
                    doseAndRate: [
                      {
                        extension: [
                          {
                            extension: [
                              { url: "documentId" },
                              { url: "offset", valueInteger: 11 },
                              { url: "length", valueInteger: 5 },
                            ],
                            url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                          },
                        ],
                        doseQuantity: { value: 100 },
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/90018f0a-a529-4336-af91-290e54271bd7",
              resource: {
                resourceType: "Practitioner",
                id: "90018f0a-a529-4336-af91-290e54271bd7",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
      {
        entities: [
          {
            dataSources: [
              { name: "UMLS", entityId: "C0020538" },
              { name: "AOD", entityId: "0000023317" },
              { name: "BI", entityId: "BI00001" },
              { name: "CCPSS", entityId: "1017493" },
              { name: "CCS", entityId: "7.1" },
              { name: "CHV", entityId: "0000015800" },
              { name: "COSTAR", entityId: "397" },
              { name: "CSP", entityId: "0571-5243" },
              { name: "CST", entityId: "HYPERTENS" },
              { name: "DXP", entityId: "U002034" },
              { name: "HPO", entityId: "HP:0000822" },
              { name: "ICD10", entityId: "I10-I15.9" },
              { name: "ICD10AM", entityId: "I10-I15.9" },
              { name: "ICD10CM", entityId: "I10" },
              { name: "ICD9CM", entityId: "997.91" },
              { name: "ICPC2ICD10ENG", entityId: "MTHU035456" },
              { name: "ICPC2P", entityId: "K85004" },
              { name: "LCH", entityId: "U002317" },
              { name: "LCH_NW", entityId: "sh85063723" },
              { name: "LNC", entityId: "LA14293-7" },
              { name: "MDR", entityId: "10020772" },
              { name: "MEDCIN", entityId: "33288" },
              { name: "MEDLINEPLUS", entityId: "34" },
              { name: "MSH", entityId: "D006973" },
              { name: "MTH", entityId: "005" },
              { name: "MTHICD9", entityId: "997.91" },
              { name: "NANDA-I", entityId: "00905" },
              { name: "NCI", entityId: "C3117" },
              { name: "NCI_CPTAC", entityId: "C3117" },
              { name: "NCI_CTCAE", entityId: "E13785" },
              { name: "NCI_CTRP", entityId: "C3117" },
              { name: "NCI_FDA", entityId: "1908" },
              { name: "NCI_GDC", entityId: "C3117" },
              { name: "NCI_NCI-GLOSS", entityId: "CDR0000458091" },
              { name: "NCI_NICHD", entityId: "C3117" },
              { name: "NCI_caDSR", entityId: "C3117" },
              { name: "NOC", entityId: "060808" },
              { name: "OMIM", entityId: "MTHU002068" },
              { name: "PCDS", entityId: "PRB_11000.06" },
              { name: "PDQ", entityId: "CDR0000686951" },
              { name: "PSY", entityId: "23830" },
              { name: "RCD", entityId: "XE0Ub" },
              { name: "SNM", entityId: "F-70700" },
              { name: "SNMI", entityId: "D3-02000" },
              { name: "SNOMEDCT_US", entityId: "38341003" },
              { name: "WHO", entityId: "0210" },
            ],
            text: "high blood pressure",
            category: "SymptomOrSign",
            offset: 29,
            length: 19,
            confidenceScore: 1,
            assertion: { certainty: "negative" },
            normalizedText: "Hypertensive disease",
          },
        ],
        entityRelations: [],
        id: "2",
        warnings: [],
        fhirBundle: {
          resourceType: "Bundle",
          id: "62e7204b-5357-4c99-b08c-725a0ada9d97",
          meta: { profile: ["http://hl7.org/fhir/4.0.1/StructureDefinition/Bundle"] },
          identifier: {
            system: "urn:ietf:rfc:3986",
            value: "urn:uuid:62e7204b-5357-4c99-b08c-725a0ada9d97",
          },
          type: "document",
          entry: [
            {
              fullUrl: "Composition/05f32110-49c7-4a13-850a-fc4d7e5c514b",
              resource: {
                resourceType: "Composition",
                id: "05f32110-49c7-4a13-850a-fc4d7e5c514b",
                language: "en",
                status: "final",
                type: {
                  coding: [
                    { system: "http://loinc.org", code: "18842-5", display: "Discharge summary" },
                  ],
                  text: "Discharge summary",
                },
                subject: {
                  reference: "Patient/5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88baf28a-bf21-40a5-adc8-4fc3db1c1d67",
                  type: "Encounter",
                  display: "unknown",
                },
                date: "0001-01-01T00:00:00+00:00",
                author: [
                  {
                    reference: "Practitioner/b2ad36f1-4bed-4ce1-8c8b-bf4c6bf6e980",
                    type: "Practitioner",
                    display: "Unknown",
                  },
                ],
                title: "Discharge summary",
                section: [
                  {
                    title: "(General)",
                    code: {
                      coding: [{ system: "", display: "Unrecognized Section" }],
                      text: "(General)",
                    },
                    author: [
                      {
                        reference: "Practitioner/b2ad36f1-4bed-4ce1-8c8b-bf4c6bf6e980",
                        type: "Practitioner",
                        display: "Unknown",
                      },
                    ],
                    text: {
                      status: "additional",
                      div: "<div>\r\n\t\t\t\t\t\t\t<h1>(General)</h1>\r\n\t\t\t\t\t\t\t<p>Patient does not suffer from high blood pressure.</p>\r\n\t\t\t\t\t</div>",
                    },
                    entry: [
                      {
                        reference: "List/dea282d0-c576-42c7-b55b-a371d8a95fee",
                        type: "List",
                        display: "(General)",
                      },
                    ],
                  },
                ],
              },
            },
            {
              fullUrl: "Patient/5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
              resource: {
                resourceType: "Patient",
                id: "5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
                language: "en",
                gender: "unknown",
              },
            },
            {
              fullUrl: "Encounter/88baf28a-bf21-40a5-adc8-4fc3db1c1d67",
              resource: {
                resourceType: "Encounter",
                id: "88baf28a-bf21-40a5-adc8-4fc3db1c1d67",
                meta: {
                  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"],
                },
                status: "finished",
                class: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  display: "unknown",
                },
                subject: {
                  reference: "Patient/5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
                  type: "Patient",
                },
              },
            },
            {
              fullUrl: "List/dea282d0-c576-42c7-b55b-a371d8a95fee",
              resource: {
                resourceType: "List",
                id: "dea282d0-c576-42c7-b55b-a371d8a95fee",
                status: "current",
                mode: "snapshot",
                title: "(General)",
                subject: {
                  reference: "Patient/5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88baf28a-bf21-40a5-adc8-4fc3db1c1d67",
                  type: "Encounter",
                  display: "unknown",
                },
                entry: [
                  {
                    item: {
                      reference: "Observation/9da1f7d2-ae2a-43ca-b33c-779b13ab8149",
                      type: "Observation",
                      display: "high blood pressure",
                    },
                  },
                ],
              },
            },
            {
              fullUrl: "Observation/9da1f7d2-ae2a-43ca-b33c-779b13ab8149",
              resource: {
                resourceType: "Observation",
                id: "9da1f7d2-ae2a-43ca-b33c-779b13ab8149",
                language: "en",
                extension: [
                  {
                    extension: [
                      { url: "documentId" },
                      { url: "offset", valueInteger: 29 },
                      { url: "length", valueInteger: 19 },
                    ],
                    url: "http://hl7.org/fhir/StructureDefinition/derivation-reference",
                  },
                ],
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/observation-category",
                        code: "exam",
                        display: "Exam",
                      },
                    ],
                    text: "Exam",
                  },
                ],
                code: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls",
                      code: "C0020538",
                      display: "Hypertensive disease",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/aod", code: "0000023317" },
                    { system: "http://www.nlm.nih.gov/research/umls/bi", code: "BI00001" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccpss", code: "1017493" },
                    { system: "http://www.nlm.nih.gov/research/umls/ccs", code: "7.1" },
                    { system: "http://www.nlm.nih.gov/research/umls/chv", code: "0000015800" },
                    { system: "http://www.nlm.nih.gov/research/umls/costar", code: "397" },
                    { system: "http://www.nlm.nih.gov/research/umls/csp", code: "0571-5243" },
                    { system: "http://www.nlm.nih.gov/research/umls/cst", code: "HYPERTENS" },
                    { system: "http://www.nlm.nih.gov/research/umls/dxp", code: "U002034" },
                    { system: "http://www.nlm.nih.gov/research/umls/hpo", code: "HP:0000822" },
                    { system: "http://hl7.org/fhir/sid/icd-10", code: "I10-I15.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-am", code: "I10-I15.9" },
                    { system: "http://hl7.org/fhir/sid/icd-10-cm", code: "I10" },
                    { system: "http://hl7.org/fhir/sid/icd-9-cm", code: "997.91" },
                    { system: "http://hl7.org/fhir/sid/icpc2icd10eng", code: "MTHU035456" },
                    { system: "http://hl7.org/fhir/sid/icpc-2p", code: "K85004" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch", code: "U002317" },
                    { system: "http://www.nlm.nih.gov/research/umls/lch_nw", code: "sh85063723" },
                    { system: "http://loinc.org", code: "LA14293-7" },
                    { system: "http://www.nlm.nih.gov/research/umls/mdr", code: "10020772" },
                    { system: "http://www.nlm.nih.gov/research/umls/medcin", code: "33288" },
                    { system: "http://www.nlm.nih.gov/research/umls/medlineplus", code: "34" },
                    { system: "http://www.nlm.nih.gov/research/umls/msh", code: "D006973" },
                    { system: "http://www.nlm.nih.gov/research/umls/mth", code: "005" },
                    { system: "http://www.nlm.nih.gov/research/umls/mthicd9", code: "997.91" },
                    { system: "http://www.nlm.nih.gov/research/umls/nanda-i", code: "00905" },
                    { system: "http://ncimeta.nci.nih.gov", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cptac", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctcae", code: "E13785" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_ctrp", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_fda", code: "1908" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_gdc", code: "C3117" },
                    {
                      system: "http://www.nlm.nih.gov/research/umls/nci_nci-gloss",
                      code: "CDR0000458091",
                    },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_nichd", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/nci_cadsr", code: "C3117" },
                    { system: "http://www.nlm.nih.gov/research/umls/noc", code: "060808" },
                    { system: "http://www.nlm.nih.gov/research/umls/omim", code: "MTHU002068" },
                    { system: "http://www.nlm.nih.gov/research/umls/pcds", code: "PRB_11000.06" },
                    { system: "http://www.nlm.nih.gov/research/umls/pdq", code: "CDR0000686951" },
                    { system: "http://www.nlm.nih.gov/research/umls/psy", code: "23830" },
                    { system: "http://www.nlm.nih.gov/research/umls/rcd", code: "XE0Ub" },
                    { system: "http://www.nlm.nih.gov/research/umls/snm", code: "F-70700" },
                    { system: "http://snomed.info/sct/900000000000207008", code: "D3-02000" },
                    { system: "http://snomed.info/sct", code: "38341003" },
                    { system: "http://www.nlm.nih.gov/research/umls/who", code: "0210" },
                  ],
                  text: "high blood pressure",
                },
                subject: {
                  reference: "Patient/5a1abcd5-2ecf-4406-a46f-1dfbe45d3232",
                  type: "Patient",
                },
                encounter: {
                  reference: "Encounter/88baf28a-bf21-40a5-adc8-4fc3db1c1d67",
                  type: "Encounter",
                  display: "unknown",
                },
                interpretation: [
                  {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        code: "NEG",
                        display: "Negative",
                      },
                    ],
                    text: "Negative",
                  },
                ],
              },
            },
            {
              fullUrl: "Practitioner/b2ad36f1-4bed-4ce1-8c8b-bf4c6bf6e980",
              resource: {
                resourceType: "Practitioner",
                id: "b2ad36f1-4bed-4ce1-8c8b-bf4c6bf6e980",
                name: [{ text: "Unknown", family: "Unknown" }],
              },
            },
          ],
        },
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation33: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [
          {
            text: "first",
            category: "Quantity",
            subCategory: "Ordinal",
            offset: 12,
            length: 5,
            confidenceScore: 0.8,
            resolutions: [
              { resolutionKind: "OrdinalResolution", offset: "1", relativeTo: "Start", value: "1" },
            ],
          },
          { text: "aircraft", category: "Product", offset: 18, length: 8, confidenceScore: 0.87 },
          {
            text: "1,300 meter per second",
            category: "Quantity",
            subCategory: "Dimension",
            offset: 59,
            length: 22,
            confidenceScore: 0.8,
            resolutions: [
              { resolutionKind: "SpeedResolution", value: 1300, unit: "MeterPerSecond" },
            ],
          },
          {
            text: "65-80",
            category: "Quantity",
            subCategory: "NumberRange",
            offset: 92,
            length: 5,
            confidenceScore: 0.9,
            resolutions: [
              {
                resolutionKind: "NumericRangeResolution",
                rangeKind: "Number",
                minimum: 65,
                maximum: 80,
              },
            ],
          },
          {
            text: "passengers",
            category: "PersonType",
            offset: 98,
            length: 10,
            confidenceScore: 0.98,
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        entities: [
          { text: "apartment", category: "Location", offset: 4, length: 9, confidenceScore: 0.89 },
          {
            text: "840 sqft",
            category: "Quantity",
            subCategory: "Dimension",
            offset: 17,
            length: 8,
            confidenceScore: 0.8,
            resolutions: [{ resolutionKind: "AreaResolution", value: 840, unit: "SquareFoot" }],
          },
          {
            text: "2",
            category: "Quantity",
            subCategory: "Number",
            offset: 38,
            length: 1,
            confidenceScore: 0.99,
            resolutions: [{ resolutionKind: "NumberResolution", numberKind: "Integer", value: 2 }],
          },
          { text: "bedrooms", category: "Location", offset: 40, length: 8, confidenceScore: 0.88 },
          {
            text: "2,000 US dollars",
            category: "Quantity",
            subCategory: "Currency",
            offset: 59,
            length: 16,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "CurrencyResolution",
                value: 2000,
                iso4217: "USD",
                unit: "United States dollar",
              },
            ],
          },
          {
            text: "11/01/2022",
            category: "DateTime",
            subCategory: "Date",
            offset: 111,
            length: 10,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "DateTimeResolution",
                timex: "2022-11-01",
                dateTimeSubKind: "Date",
                value: "2022-11-01",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        entities: [
          {
            text: "200 terabytes",
            category: "Quantity",
            subCategory: "Dimension",
            offset: 15,
            length: 13,
            confidenceScore: 0.8,
            resolutions: [
              { resolutionKind: "InformationResolution", value: 200, unit: "Terabyte" },
            ],
          },
          {
            text: "between",
            category: "DateTime",
            subCategory: "DateRange",
            offset: 37,
            length: 7,
            confidenceScore: 0.65,
          },
          {
            text: "October 24th, 2022",
            category: "DateTime",
            subCategory: "Date",
            offset: 45,
            length: 18,
            confidenceScore: 0.64,
            resolutions: [
              {
                resolutionKind: "DateTimeResolution",
                timex: "2022-10-24",
                dateTimeSubKind: "Date",
                value: "2022-10-24",
              },
            ],
          },
          {
            text: "October 28th",
            category: "DateTime",
            subCategory: "Date",
            offset: 68,
            length: 12,
            confidenceScore: 0.56,
            resolutions: [
              {
                resolutionKind: "DateTimeResolution",
                timex: "XXXX-10-28",
                dateTimeSubKind: "Date",
                value: "2022-10-28",
              },
              {
                resolutionKind: "DateTimeResolution",
                timex: "XXXX-10-28",
                dateTimeSubKind: "Date",
                value: "2023-10-28",
              },
            ],
          },
          {
            text: "2022",
            category: "DateTime",
            subCategory: "DateRange",
            offset: 82,
            length: 4,
            confidenceScore: 0.63,
            resolutions: [
              {
                resolutionKind: "TemporalSpanResolution",
                begin: "2022-01-01",
                end: "2023-01-01",
                timex: "2022",
              },
            ],
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];
export const expectation63: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 1, neutral: 0, negative: 0 },
    sentences: [
      {
        text: "I had a wonderful trip to Seattle last week and even visited the Space Needle 2 times!",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 86,
        opinions: [],
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "Unfortunately, it rained during my entire trip to Seattle. ",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 59,
        opinions: [],
      },
      {
        text: "I didn't even get to visit the Space Needle",
        sentiment: "neutral",
        confidenceScores: { positive: 0, neutral: 0.92, negative: 0.08 },
        offset: 59,
        length: 43,
        opinions: [],
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
    sentences: [
      {
        text: "I went to see a movie on Saturday and it was perfectly average, nothing more or less than I expected.",
        sentiment: "negative",
        confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
        offset: 0,
        length: 101,
        opinions: [],
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "I didn't like the last book I read at all.",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 42,
        opinions: [],
      },
    ],
  },
];

export const expectation65: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0, negative: 1 },
    sentences: [
      {
        text: "The food was unacceptable",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0, negative: 1 },
        offset: 0,
        length: 25,
        opinions: [
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0.02, negative: 0.98 },
              offset: 4,
              length: 4,
              text: "food",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0.02, negative: 0.98 },
                offset: 13,
                length: 12,
                text: "unacceptable",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
    sentences: [
      {
        text: "The rooms were beautiful. ",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 26,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 4,
              length: 5,
              text: "rooms",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 15,
                length: 9,
                text: "beautiful",
                isNegated: false,
              },
            ],
          },
        ],
      },
      {
        text: "The AC was good and quiet.",
        sentiment: "positive",
        confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
        offset: 26,
        length: 26,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 30,
              length: 2,
              text: "AC",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 37,
                length: 4,
                text: "good",
                isNegated: false,
              },
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 46,
                length: 5,
                text: "quiet",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0, negative: 0.99 },
    sentences: [
      {
        text: "The breakfast was good, but the toilet was smelly.",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0, negative: 0.99 },
        offset: 0,
        length: 50,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 4,
              length: 9,
              text: "breakfast",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 18,
                length: 4,
                text: "good",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0, negative: 1 },
              offset: 32,
              length: 6,
              text: "toilet",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0, negative: 1 },
                offset: 43,
                length: 6,
                text: "smelly",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 1, neutral: 0, negative: 0 },
    sentences: [
      {
        text: "Loved this hotel - good breakfast - nice shuttle service - clean rooms.",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 71,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 11,
              length: 5,
              text: "hotel",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 0,
                length: 5,
                text: "Loved",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 24,
              length: 9,
              text: "breakfast",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 19,
                length: 4,
                text: "good",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 41,
              length: 15,
              text: "shuttle service",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 36,
                length: 4,
                text: "nice",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 65,
              length: 5,
              text: "rooms",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 59,
                length: 5,
                text: "clean",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 0.92, neutral: 0.07, negative: 0.01 },
    sentences: [
      {
        text: "I had a great unobstructed view of the Microsoft campus.",
        sentiment: "positive",
        confidenceScores: { positive: 0.92, neutral: 0.07, negative: 0.01 },
        offset: 0,
        length: 56,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 27,
              length: 4,
              text: "view",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 8,
                length: 5,
                text: "great",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0.04, neutral: 0, negative: 0.96 },
    sentences: [
      {
        text: "Nice rooms but bathrooms were old and the toilet was dirty when we arrived.",
        sentiment: "negative",
        confidenceScores: { positive: 0.04, neutral: 0, negative: 0.96 },
        offset: 0,
        length: 75,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 5,
              length: 5,
              text: "rooms",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 0,
                length: 4,
                text: "Nice",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0, negative: 1 },
              offset: 15,
              length: 9,
              text: "bathrooms",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0, negative: 1 },
                offset: 30,
                length: 3,
                text: "old",
                isNegated: false,
              },
            ],
          },
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0.01, negative: 0.99 },
              offset: 42,
              length: 6,
              text: "toilet",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0.01, negative: 0.99 },
                offset: 53,
                length: 5,
                text: "dirty",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "6",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.02, negative: 0.98 },
    sentences: [
      {
        text: "The toilet smelled.",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.02, negative: 0.98 },
        offset: 0,
        length: 19,
        opinions: [
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0, negative: 1 },
              offset: 4,
              length: 6,
              text: "toilet",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0, negative: 1 },
                offset: 11,
                length: 7,
                text: "smelled",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const expectation66: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 1, neutral: 0, negative: 0 },
    sentences: [
      {
        text: "I had a wonderful trip to Seattle last week and even visited the Space Needle 2 times!",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 86,
        opinions: [],
      },
    ],
  },
  { id: "1", error: { code: "InvalidDocument", message: "Document text is empty." } },
  {
    id: "2",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "Unfortunately, it rained during my entire trip to Seattle. ",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 59,
        opinions: [],
      },
      {
        text: "I didn't even get to visit the Space Needle",
        sentiment: "neutral",
        confidenceScores: { positive: 0, neutral: 0.92, negative: 0.08 },
        offset: 59,
        length: 43,
        opinions: [],
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
    sentences: [
      {
        text: "I went to see a movie on Saturday and it was perfectly average, nothing more or less than I expected.",
        sentiment: "negative",
        confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
        offset: 0,
        length: 101,
        opinions: [],
      },
    ],
  },
  {
    id: "4",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "I didn't like the last book I read at all.",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 42,
        opinions: [],
      },
    ],
  },
];

export const expectation34: SentimentAnalysisResult[] = [
  {
    id: "1",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 1, neutral: 0, negative: 0 },
    sentences: [
      {
        text: "I had a wonderful trip to Seattle last week and even visited the Space Needle 2 times!",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 86,
        opinions: [],
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "Unfortunately, it rained during my entire trip to Seattle. ",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 59,
        opinions: [],
      },
      {
        text: "I didn't even get to visit the Space Needle",
        sentiment: "neutral",
        confidenceScores: { positive: 0, neutral: 0.92, negative: 0.08 },
        offset: 59,
        length: 43,
        opinions: [],
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
    sentences: [
      {
        text: "I went to see a movie on Saturday and it was perfectly average, nothing more or less than I expected.",
        sentiment: "negative",
        confidenceScores: { positive: 0.19, neutral: 0.28, negative: 0.53 },
        offset: 0,
        length: 101,
        opinions: [],
      },
    ],
  },
  {
    id: "4",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
    sentences: [
      {
        text: "I didn't like the last book I read at all.",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.01, negative: 0.99 },
        offset: 0,
        length: 42,
        opinions: [],
      },
    ],
  },
  {
    id: "5",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 1, neutral: 0, negative: 0 },
    sentences: [
      {
        text: "Los caminos que llevan hasta Monte Rainier son espectaculares y hermosos.",
        sentiment: "positive",
        confidenceScores: { positive: 1, neutral: 0, negative: 0 },
        offset: 0,
        length: 73,
        opinions: [],
      },
    ],
  },
  {
    id: "6",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0.03, negative: 0.97 },
    sentences: [
      {
        text: "La carretera estaba atascada. ",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0.03, negative: 0.97 },
        offset: 0,
        length: 30,
        opinions: [],
      },
      {
        text: "Había mucho tráfico el día de ayer.",
        sentiment: "neutral",
        confidenceScores: { positive: 0.03, neutral: 0.93, negative: 0.04 },
        offset: 30,
        length: 35,
        opinions: [],
      },
    ],
  },
];

export const expectation35: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "positive",
    confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
    sentences: [
      {
        text: "It has a sleek premium aluminum design that makes it beautiful to look at.",
        sentiment: "positive",
        confidenceScores: { positive: 0.99, neutral: 0.01, negative: 0 },
        offset: 0,
        length: 74,
        opinions: [
          {
            target: {
              sentiment: "positive",
              confidenceScores: { positive: 1, negative: 0 },
              offset: 32,
              length: 6,
              text: "design",
            },
            assessments: [
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 9,
                length: 5,
                text: "sleek",
                isNegated: false,
              },
              {
                sentiment: "positive",
                confidenceScores: { positive: 1, negative: 0 },
                offset: 53,
                length: 9,
                text: "beautiful",
                isNegated: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const expectation36: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "negative",
    confidenceScores: { positive: 0, neutral: 0, negative: 1 },
    sentences: [
      {
        text: "The food and service are not good",
        sentiment: "negative",
        confidenceScores: { positive: 0, neutral: 0, negative: 1 },
        offset: 0,
        length: 33,
        opinions: [
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0, negative: 1 },
              offset: 4,
              length: 4,
              text: "food",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0, negative: 1 },
                offset: 29,
                length: 4,
                text: "good",
                isNegated: true,
              },
            ],
          },
          {
            target: {
              sentiment: "negative",
              confidenceScores: { positive: 0, negative: 1 },
              offset: 13,
              length: 7,
              text: "service",
            },
            assessments: [
              {
                sentiment: "negative",
                confidenceScores: { positive: 0, negative: 1 },
                offset: 29,
                length: 4,
                text: "good",
                isNegated: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const expectation37: SentimentAnalysisResult[] = [
  {
    id: "0",
    warnings: [],
    sentiment: "neutral",
    confidenceScores: { positive: 0.17, neutral: 0.81, negative: 0.01 },
    sentences: [
      {
        text: "today is a hot day",
        sentiment: "neutral",
        confidenceScores: { positive: 0.17, neutral: 0.81, negative: 0.01 },
        offset: 0,
        length: 18,
        opinions: [],
      },
    ],
  },
];

export const expectation38: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "0",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "1",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "2",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "3",
    warnings: [],
  },
];

export const expectation39: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "0",
    warnings: [],
  },
];

export const expectation40: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.95 },
    id: "0",
    warnings: [],
  },
];

export const expectation41: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "1",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "2",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "3",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "4",
    warnings: [],
  },
  {
    primaryLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.99 },
    id: "5",
    warnings: [],
  },
  {
    primaryLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 1 },
    id: "6",
    warnings: [],
  },
];

export const expectation42: LanguageDetectionResult[] = [
  {
    id: "0",
    error: {
      code: "InvalidCountryHint",
      message:
        "Country hint is not valid. Please specify an ISO 3166-1 alpha-2 two letter country code.",
    },
  },
];

export const expectation43: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "1",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "2",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "3",
    warnings: [],
  },
  {
    primaryLanguage: { name: "English", iso6391Name: "en", confidenceScore: 1 },
    id: "4",
    warnings: [],
  },
  {
    primaryLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.99 },
    id: "5",
    warnings: [],
  },
  {
    primaryLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 1 },
    id: "6",
    warnings: [],
  },
];

export const expectation44: EntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 18, length: 4, confidenceScore: 0.61 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 26,
        length: 7,
        confidenceScore: 1,
      },
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
      { text: "Space Needle", category: "Location", offset: 65, length: 12, confidenceScore: 0.96 },
      {
        text: "2",
        category: "Quantity",
        subCategory: "Number",
        offset: 78,
        length: 1,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 42, length: 4, confidenceScore: 0.82 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 50,
        length: 7,
        confidenceScore: 1,
      },
      { text: "Space Needle", category: "Location", offset: 90, length: 12, confidenceScore: 0.92 },
    ],
  },
  {
    id: "2",
    warnings: [],
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    entities: [{ text: "book", category: "Product", offset: 23, length: 4, confidenceScore: 0.92 }],
  },
];

export const expectation45: EntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 18, length: 4, confidenceScore: 0.61 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 26,
        length: 7,
        confidenceScore: 1,
      },
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
      { text: "Space Needle", category: "Location", offset: 65, length: 12, confidenceScore: 0.96 },
      {
        text: "2",
        category: "Quantity",
        subCategory: "Number",
        offset: 78,
        length: 1,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 42, length: 4, confidenceScore: 0.82 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 50,
        length: 7,
        confidenceScore: 1,
      },
      { text: "Space Needle", category: "Location", offset: 90, length: 12, confidenceScore: 0.92 },
    ],
  },
  {
    id: "2",
    warnings: [],
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    entities: [{ text: "book", category: "Product", offset: 23, length: 4, confidenceScore: 0.92 }],
  },
];

export const expectation47: EntityRecognitionResult[] = [
  {
    id: "1",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 18, length: 4, confidenceScore: 0.61 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 26,
        length: 7,
        confidenceScore: 1,
      },
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
      { text: "Space Needle", category: "Location", offset: 65, length: 12, confidenceScore: 0.96 },
      {
        text: "2",
        category: "Quantity",
        subCategory: "Number",
        offset: 78,
        length: 1,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    entities: [
      { text: "trip", category: "Event", offset: 42, length: 4, confidenceScore: 0.82 },
      {
        text: "Seattle",
        category: "Location",
        subCategory: "GPE",
        offset: 50,
        length: 7,
        confidenceScore: 1,
      },
      { text: "Space Needle", category: "Location", offset: 90, length: 12, confidenceScore: 0.92 },
    ],
  },
  {
    id: "3",
    warnings: [],
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "4",
    warnings: [],
    entities: [
      {
        text: "Monte Rainier",
        category: "Location",
        offset: 29,
        length: 13,
        confidenceScore: 0.85,
      },
    ],
  },
  {
    id: "5",
    warnings: [],
    entities: [
      { text: "carretera", category: "Location", offset: 3, length: 9, confidenceScore: 0.81 },
      {
        text: "ayer",
        category: "DateTime",
        subCategory: "Date",
        offset: 60,
        length: 4,
        confidenceScore: 0.8,
      },
    ],
  },
];

export const expectation48: KeyPhraseExtractionResult[] = [
  { id: "0", warnings: [], keyPhrases: ["wonderful trip", "Space Needle", "Seattle"] },
  { id: "1", warnings: [], keyPhrases: ["entire trip", "Space Needle", "Seattle"] },
  { id: "2", warnings: [], keyPhrases: ["movie", "Saturday"] },
  { id: "3", warnings: [], keyPhrases: ["last book"] },
];

export const expectation49: KeyPhraseExtractionResult[] = [
  { id: "0", warnings: [], keyPhrases: ["wonderful trip", "Space Needle", "Seattle"] },
  { id: "1", warnings: [], keyPhrases: ["entire trip", "Space Needle", "Seattle"] },
  { id: "2", warnings: [], keyPhrases: ["movie", "Saturday"] },
  { id: "3", warnings: [], keyPhrases: ["last book"] },
];

export const expectation51: KeyPhraseExtractionResult[] = [
  { id: "1", warnings: [], keyPhrases: ["wonderful trip", "Space Needle", "Seattle"] },
  { id: "2", warnings: [], keyPhrases: ["entire trip", "Space Needle", "Seattle"] },
  { id: "3", warnings: [], keyPhrases: ["movie", "Saturday"] },
  { id: "4", warnings: [], keyPhrases: ["last book"] },
  { id: "5", warnings: [], keyPhrases: ["Monte Rainier", "caminos"] },
  { id: "6", warnings: [], keyPhrases: ["mucho tráfico", "día", "carretera", "ayer"] },
];

export const expectation52: PiiEntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText:
      "I had a wonderful trip to Seattle ********* and even visited the Space Needle 2 times!",
    entities: [
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    redactedText:
      "Unfortunately, it rained during my entire trip to Seattle. I didn't even get to visit the Space Needle",
    entities: [],
  },
  {
    id: "2",
    warnings: [],
    redactedText:
      "I went to see a movie on ******** and it was perfectly average, nothing more or less than I expected.",
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    redactedText: "I didn't like the last book I read at all.",
    entities: [],
  },
];

export const expectation53: PiiEntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText:
      "I had a wonderful trip to Seattle ********* and even visited the Space Needle 2 times!",
    entities: [
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    redactedText:
      "Unfortunately, it rained during my entire trip to Seattle. I didn't even get to visit the Space Needle",
    entities: [],
  },
  {
    id: "2",
    warnings: [],
    redactedText:
      "I went to see a movie on ******** and it was perfectly average, nothing more or less than I expected.",
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "3",
    warnings: [],
    redactedText: "I didn't like the last book I read at all.",
    entities: [],
  },
];

export const expectation54: PiiEntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText: "Your Social Security Number is ***********.",
    entities: [
      {
        text: "859-98-0987",
        category: "USSocialSecurityNumber",
        offset: 31,
        length: 11,
        confidenceScore: 0.65,
      },
    ],
  },
];

export const expectation56: PiiEntityRecognitionResult[] = [
  {
    id: "1",
    warnings: [],
    redactedText:
      "I had a wonderful trip to Seattle ********* and even visited the Space Needle 2 times!",
    entities: [
      {
        text: "last week",
        category: "DateTime",
        subCategory: "DateRange",
        offset: 34,
        length: 9,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    redactedText:
      "Unfortunately, it rained during my entire trip to Seattle. I didn't even get to visit the Space Needle",
    entities: [],
  },
  {
    id: "3",
    warnings: [],
    redactedText:
      "I went to see a movie on ******** and it was perfectly average, nothing more or less than I expected.",
    entities: [
      {
        text: "Saturday",
        category: "DateTime",
        subCategory: "Date",
        offset: 25,
        length: 8,
        confidenceScore: 0.8,
      },
    ],
  },
  {
    id: "4",
    warnings: [],
    redactedText: "Los caminos que llevan hasta Monte Rainier son espectaculares y hermosos.",
    entities: [],
  },
  {
    id: "5",
    warnings: [],
    redactedText: "La carretera estaba atascada. Había mucho tráfico el día de ****.",
    entities: [
      {
        text: "ayer",
        category: "DateTime",
        subCategory: "Date",
        offset: 60,
        length: 4,
        confidenceScore: 0.8,
      },
    ],
  },
];

export const expectation57: PiiEntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText: "I work at ********* and my phone number is ************",
    entities: [
      { text: "Microsoft", category: "Organization", offset: 10, length: 9, confidenceScore: 0.94 },
      {
        text: "333-333-3333",
        category: "PhoneNumber",
        offset: 43,
        length: 12,
        confidenceScore: 0.8,
      },
    ],
  },
];

export const expectation58: PiiEntityRecognitionResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText: "Patient name is Joe and SSN is ***********",
    entities: [
      {
        text: "859-98-0987",
        category: "USSocialSecurityNumber",
        offset: 31,
        length: 11,
        confidenceScore: 0.65,
      },
    ],
  },
];

export const expectation59: PiiEntityRecognitionSuccessResult[] = [
  {
    id: "0",
    warnings: [],
    redactedText: "Patient name is *** and SSN is ***********",
    entities: [
      { text: "Joe", category: "Person", offset: 16, length: 3, confidenceScore: 0.78 },
      {
        text: "859-98-0987",
        category: "USSocialSecurityNumber",
        offset: 31,
        length: 11,
        confidenceScore: 0.65,
      },
    ],
  },
];

export const expectation60: EntityLinkingResult[] = [
  {
    id: "0",
    warnings: [],
    entities: [
      {
        name: "Seattle",
        matches: [{ confidenceScore: 0.21, text: "Seattle", offset: 26, length: 7 }],
        language: "en",
        dataSourceEntityId: "Seattle",
        url: "https://en.wikipedia.org/wiki/Seattle",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "5fbba6b8-85e1-4d41-9444-d9055436e473",
      },
      {
        name: "Space Needle",
        matches: [{ confidenceScore: 0.42, text: "Space Needle", offset: 65, length: 12 }],
        language: "en",
        dataSourceEntityId: "Space Needle",
        url: "https://en.wikipedia.org/wiki/Space_Needle",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "f8dd5b08-206d-2554-6e4a-893f51f4de7e",
      },
    ],
  },
  {
    id: "1",
    warnings: [],
    entities: [
      {
        name: "Seattle",
        matches: [{ confidenceScore: 0.2, text: "Seattle", offset: 50, length: 7 }],
        language: "en",
        dataSourceEntityId: "Seattle",
        url: "https://en.wikipedia.org/wiki/Seattle",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "5fbba6b8-85e1-4d41-9444-d9055436e473",
      },
      {
        name: "Space Needle",
        matches: [{ confidenceScore: 0.36, text: "Space Needle", offset: 90, length: 12 }],
        language: "en",
        dataSourceEntityId: "Space Needle",
        url: "https://en.wikipedia.org/wiki/Space_Needle",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "f8dd5b08-206d-2554-6e4a-893f51f4de7e",
      },
    ],
  },
  {
    id: "2",
    warnings: [],
    entities: [
      {
        name: "Saturday",
        matches: [{ confidenceScore: 0.05, text: "Saturday", offset: 25, length: 8 }],
        language: "en",
        dataSourceEntityId: "Saturday",
        url: "https://en.wikipedia.org/wiki/Saturday",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "296617ab-4ddb-cc10-beba-56e0f42af76b",
      },
    ],
  },
  { id: "3", warnings: [], entities: [] },
];

export const expectation62: EntityLinkingResult[] = [
  {
    id: "1",
    warnings: [],
    entities: [
      {
        name: "Saturday",
        matches: [{ confidenceScore: 0.05, text: "Saturday", offset: 25, length: 8 }],
        language: "en",
        dataSourceEntityId: "Saturday",
        url: "https://en.wikipedia.org/wiki/Saturday",
        dataSource: "Wikipedia",
        bingEntitySearchApiId: "296617ab-4ddb-cc10-beba-56e0f42af76b",
      },
    ],
  },
  { id: "2", warnings: [], entities: [] },
];

export const expectation71: any = [
  {
    kind: "EntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [
          {
            text: "park",
            category: "Location",
            offset: 17,
            subCategory: "Structural",
            length: 4,
            confidenceScore: 0.99,
          },
        ],
        detectedLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.98 },
        isLanguageDefaulted: false,
      },
      {
        id: "1",
        warnings: [],
        entities: [
          {
            text: "un",
            category: "Quantity",
            subCategory: "Number",
            offset: 8,
            length: 2,
            confidenceScore: 0.8,
          },
          { text: "Español", category: "Skill", offset: 31, length: 7, confidenceScore: 0.94 },
        ],
        detectedLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.75 },
        isLanguageDefaulted: false,
      },
      {
        id: "2",
        warnings: [],
        entities: [
          { text: "猫", category: "Product", offset: 0, length: 1, confidenceScore: 0.42 },
        ],
        detectedLanguage: { name: "Japanese", iso6391Name: "ja", confidenceScore: 1 },
        isLanguageDefaulted: false,
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "PiiEntityRecognition",
    results: [
      {
        id: "0",
        warnings: [],
        redactedText: "I will go to the park.",
        entities: [],
        detectedLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.98 },
        isLanguageDefaulted: false,
      },
      {
        id: "1",
        warnings: [],
        redactedText: "Este es un document escrito en Español.",
        entities: [],
        detectedLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.75 },
        isLanguageDefaulted: false,
      },
      {
        id: "2",
        warnings: [],
        redactedText: "猫は幸せ",
        entities: [],
        detectedLanguage: { name: "Japanese", iso6391Name: "ja", confidenceScore: 1 },
        isLanguageDefaulted: false,
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "SentimentAnalysis",
    results: [
      {
        id: "0",
        warnings: [],
        sentiment: "neutral",
        confidenceScores: { positive: 0, neutral: 0.99, negative: 0 },
        detectedLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.98 },
        isLanguageDefaulted: false,
        sentences: [
          {
            text: "I will go to the park.",
            sentiment: "neutral",
            confidenceScores: { positive: 0, neutral: 0.99, negative: 0 },
            offset: 0,
            length: 22,
            opinions: [],
          },
        ],
      },
      {
        id: "1",
        warnings: [],
        sentiment: "neutral",
        confidenceScores: { positive: 0.02, neutral: 0.98, negative: 0 },
        detectedLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.75 },
        isLanguageDefaulted: false,
        sentences: [
          {
            text: "Este es un document escrito en Español.",
            sentiment: "neutral",
            confidenceScores: { positive: 0.02, neutral: 0.98, negative: 0 },
            offset: 0,
            length: 39,
            opinions: [],
          },
        ],
      },
      {
        id: "2",
        warnings: [],
        sentiment: "positive",
        confidenceScores: { positive: 0.96, neutral: 0.04, negative: 0.01 },
        detectedLanguage: { name: "Japanese", iso6391Name: "ja", confidenceScore: 1 },
        isLanguageDefaulted: false,
        sentences: [
          {
            text: "猫は幸せ",
            sentiment: "positive",
            confidenceScores: { positive: 0.96, neutral: 0.04, negative: 0.01 },
            offset: 0,
            length: 4,
            opinions: [],
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "KeyPhraseExtraction",
    results: [
      {
        id: "0",
        warnings: [],
        keyPhrases: ["park"],
        detectedLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.98 },
        isLanguageDefaulted: false,
      },
      {
        id: "1",
        warnings: [],
        keyPhrases: ["Español", "document"],
        detectedLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.75 },
        isLanguageDefaulted: false,
      },
      {
        id: "2",
        warnings: [],
        keyPhrases: [],
        detectedLanguage: { name: "Japanese", iso6391Name: "ja", confidenceScore: 1 },
        isLanguageDefaulted: false,
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "EntityLinking",
    results: [
      {
        id: "0",
        warnings: [],
        entities: [],
        detectedLanguage: { name: "English", iso6391Name: "en", confidenceScore: 0.98 },
        isLanguageDefaulted: false,
      },
      {
        id: "1",
        warnings: [],
        entities: [],
        detectedLanguage: { name: "Spanish", iso6391Name: "es", confidenceScore: 0.75 },
        isLanguageDefaulted: false,
      },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code 'ja'. Supported languages: en,es. For additional details see https://aka.ms/language-service/language-support",
        },
      },
    ],
    completedOn,
    modelVersion,
  },
  {
    kind: "Healthcare",
    results: [
      {
        entities: [],
        entityRelations: [],
        detectedLanguage: { iso6391Name: "en" },
        id: "0",
        warnings: [],
        isLanguageDefaulted: false,
      },
      {
        id: "1",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code 'es'. Supported languages: en. For additional details see https://aka.ms/language-service/language-support",
        },
      },
      {
        id: "2",
        error: {
          code: "UnsupportedLanguageCode",
          message:
            "Invalid language code 'ja'. Supported languages: en. For additional details see https://aka.ms/language-service/language-support",
        },
      },
    ],
    completedOn,
    modelVersion,
  },
];

export const expectation72: LanguageDetectionResult[] = [
  {
    primaryLanguage: { name: "Hindi", iso6391Name: "hi", confidenceScore: 1, script: "Latin" },
    id: "0",
    warnings: [],
  },
];

export const expectation73: AnalyzeBatchResult[] = [
  {
    kind: "EntityRecognition",
    error: {
      code: KnownErrorCode.InvalidRequest,
      message: "oh my bad",
    },
    modelVersion,
    failedOn,
  },
  {
    kind: "Healthcare",
    results: [
      {
        entities: [],
        entityRelations: [],
        id: "0",
        warnings: [
          {
            code: "DocumentTruncated",
            message:
              "Document is large and must be split to be processed; relations across splits may not be caught by the model",
          },
        ],
      },
    ],
    completedOn,
    modelVersion,
  },
];
