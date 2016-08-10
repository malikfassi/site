exports.loadChildren = function(req, res) {
  if (req.query.id) {
    res.status(200).json({
      "object" : null,
      "status" : 0,
      "message" : null,
      "listItems" : [{
        "actionId" : "1001",
        "actionName" : "Changement",
        "timbre" : "1000/1001",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1011",
        "actionName" : "Emploi",
        "timbre" : "1000/1011",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1021",
        "actionName" : "Formateur",
        "timbre" : "1000/1021",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1041",
        "actionName" : "Project",
        "timbre" : "1000/1041",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1052",
        "actionName" : "Type",
        "timbre" : "1000/1052",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }],
      "count" : null,
      "misc" : null
    });
  } else {
    res.status(200).json({
      "object" : null,
      "status" : 0,
      "message" : null,
      "listItems" : [{
        "actionId" : "1000",
        "actionName" : "Module Test",
        "timbre" : "1000",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1062",
        "actionName" : "Module Admin",
        "timbre" : "1062",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "1177",
        "actionName" : "Module Custom Request",
        "timbre" : "1177",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }, {
        "actionId" : "300000",
        "actionName" : "Workflows",
        "timbre" : "300000",
        "children" : null,
        "checked" : false,
        "indeterminate" : false,
        "touched" : 0
      }],
      "count" : null,
      "misc" : null
    });
  }
};

exports.searchPage = function(req, res) {
  res.status(200).json({
    "object" : null,
    "status" : 0,
    "message" : null,
    "listItems" : [{
      "id" : 1,
      "codeRole" : "ADMIN",
      "libelleRole" : "Adminisrateur",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1052,
        "actionDescription" : "Type",
        "actionName" : "Type",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1053,
        "actionDescription" : "Recherche Type",
        "actionName" : "Recherche Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1053",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1054,
        "actionDescription" : "Consultation Type",
        "actionName" : "Consultation Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1054",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1055,
        "actionDescription" : "Ajout Type",
        "actionName" : "Ajout Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1055",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1056,
        "actionDescription" : "Edition Type",
        "actionName" : "Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1056",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1057,
        "actionDescription" : "Modification Type",
        "actionName" : "Modification Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1057",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1058,
        "actionDescription" : "Suppression Type",
        "actionName" : "Suppression Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1058",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1059,
        "actionDescription" : "Annuler edition Type",
        "actionName" : "Annuler Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1059",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1060,
        "actionDescription" : "Imprimer Type",
        "actionName" : "Imprimer Type",
        "actionClassName" : "awb.aida.test.metier.services.TypePrintUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1060",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1063,
        "actionDescription" : "Utilisateur",
        "actionName" : "Utilisateur",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1064,
        "actionDescription" : "Recherche Utilisateur",
        "actionName" : "Recherche Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1064",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1065,
        "actionDescription" : "Consultation Utilisateur",
        "actionName" : "Consultation Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1065",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1066,
        "actionDescription" : "Ajout Utilisateur",
        "actionName" : "Ajout Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1066",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1088,
        "actionDescription" : "Ajout Role",
        "actionName" : "Ajout Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1088",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1089,
        "actionDescription" : "Edition Role",
        "actionName" : "Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1089",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1090,
        "actionDescription" : "Modification Role",
        "actionName" : "Modification Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1090",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1091,
        "actionDescription" : "Suppression Role",
        "actionName" : "Suppression Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1091",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1092,
        "actionDescription" : "Annuler edition Role",
        "actionName" : "Annuler Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1092",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1093,
        "actionDescription" : "Imprimer Role",
        "actionName" : "Imprimer Role",
        "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1093",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1095,
        "actionDescription" : "Unite Organisationnelle",
        "actionName" : "Unite Organisationnelle",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1096,
        "actionDescription" : "Recherche Unite Organisationnelle",
        "actionName" : "Recherche Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1096",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1097,
        "actionDescription" : "Consultation Unite Organisationnelle",
        "actionName" : "Consultation Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1097",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1098,
        "actionDescription" : "Ajout Unite Organisationnelle",
        "actionName" : "Ajout Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1098",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1099,
        "actionDescription" : "Edition Unite Organisationnelle",
        "actionName" : "Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1099",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1100,
        "actionDescription" : "Modification Unite Organisationnelle",
        "actionName" : "Modification Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1100",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1101,
        "actionDescription" : "Suppression Unite Organisationnelle",
        "actionName" : "Suppression Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1101",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1102,
        "actionDescription" : "Annuler edition Unite Organisationnelle",
        "actionName" : "Annuler Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1102",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1103,
        "actionDescription" : "Imprimer Unite Organisationnelle",
        "actionName" : "Imprimer Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1103",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300000,
        "actionDescription" : "workflows",
        "actionName" : "Workflows",
        "actionClassName" : "",
        "moduleName" : "workflow",
        "sousModuleName" : "workflow",
        "timbre" : "300000",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 300001,
        "actionDescription" : "Project Workflow Project",
        "actionName" : "Project Workflow Project",
        "actionClassName" : "",
        "moduleName" : "Workflow Project",
        "sousModuleName" : "Workflow Project",
        "timbre" : "300000/300001",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300000,
            "actionDescription" : "workflows",
            "actionName" : "Workflows",
            "actionClassName" : "",
            "moduleName" : "workflow",
            "sousModuleName" : "workflow",
            "timbre" : "300000",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300002,
        "actionDescription" : "valider Project Workflow Project",
        "actionName" : "valider Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300002",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300003,
        "actionDescription" : "rejeter Project Workflow Project",
        "actionName" : "rejeter Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300003",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 2,
      "codeRole" : "AG",
      "libelleRole" : "Agent",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1063,
        "actionDescription" : "Utilisateur",
        "actionName" : "Utilisateur",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1064,
        "actionDescription" : "Recherche Utilisateur",
        "actionName" : "Recherche Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1064",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1065,
        "actionDescription" : "Consultation Utilisateur",
        "actionName" : "Consultation Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1065",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1066,
        "actionDescription" : "Ajout Utilisateur",
        "actionName" : "Ajout Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1066",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1088,
        "actionDescription" : "Ajout Role",
        "actionName" : "Ajout Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1088",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1089,
        "actionDescription" : "Edition Role",
        "actionName" : "Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1089",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1090,
        "actionDescription" : "Modification Role",
        "actionName" : "Modification Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1090",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1091,
        "actionDescription" : "Suppression Role",
        "actionName" : "Suppression Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1091",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1092,
        "actionDescription" : "Annuler edition Role",
        "actionName" : "Annuler Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1092",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1093,
        "actionDescription" : "Imprimer Role",
        "actionName" : "Imprimer Role",
        "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1093",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1095,
        "actionDescription" : "Unite Organisationnelle",
        "actionName" : "Unite Organisationnelle",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1096,
        "actionDescription" : "Recherche Unite Organisationnelle",
        "actionName" : "Recherche Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1096",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1097,
        "actionDescription" : "Consultation Unite Organisationnelle",
        "actionName" : "Consultation Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1097",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1098,
        "actionDescription" : "Ajout Unite Organisationnelle",
        "actionName" : "Ajout Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1098",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1099,
        "actionDescription" : "Edition Unite Organisationnelle",
        "actionName" : "Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1099",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1100,
        "actionDescription" : "Modification Unite Organisationnelle",
        "actionName" : "Modification Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1100",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1101,
        "actionDescription" : "Suppression Unite Organisationnelle",
        "actionName" : "Suppression Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1101",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1102,
        "actionDescription" : "Annuler edition Unite Organisationnelle",
        "actionName" : "Annuler Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1102",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1103,
        "actionDescription" : "Imprimer Unite Organisationnelle",
        "actionName" : "Imprimer Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1103",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300000,
        "actionDescription" : "workflows",
        "actionName" : "Workflows",
        "actionClassName" : "",
        "moduleName" : "workflow",
        "sousModuleName" : "workflow",
        "timbre" : "300000",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 300001,
        "actionDescription" : "Project Workflow Project",
        "actionName" : "Project Workflow Project",
        "actionClassName" : "",
        "moduleName" : "Workflow Project",
        "sousModuleName" : "Workflow Project",
        "timbre" : "300000/300001",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300000,
            "actionDescription" : "workflows",
            "actionName" : "Workflows",
            "actionClassName" : "",
            "moduleName" : "workflow",
            "sousModuleName" : "workflow",
            "timbre" : "300000",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300002,
        "actionDescription" : "valider Project Workflow Project",
        "actionName" : "valider Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300002",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 52,
      "codeRole" : "TEC",
      "libelleRole" : "Technicien",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1027,
        "actionDescription" : "Suppression Formateur",
        "actionName" : "Suppression Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1027",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300000,
        "actionDescription" : "workflows",
        "actionName" : "Workflows",
        "actionClassName" : "",
        "moduleName" : "workflow",
        "sousModuleName" : "workflow",
        "timbre" : "300000",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 300001,
        "actionDescription" : "Project Workflow Project",
        "actionName" : "Project Workflow Project",
        "actionClassName" : "",
        "moduleName" : "Workflow Project",
        "sousModuleName" : "Workflow Project",
        "timbre" : "300000/300001",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300000,
            "actionDescription" : "workflows",
            "actionName" : "Workflows",
            "actionClassName" : "",
            "moduleName" : "workflow",
            "sousModuleName" : "workflow",
            "timbre" : "300000",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300002,
        "actionDescription" : "valider Project Workflow Project",
        "actionName" : "valider Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300002",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300003,
        "actionDescription" : "rejeter Project Workflow Project",
        "actionName" : "rejeter Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300003",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 102,
      "codeRole" : "S",
      "libelleRole" : "Sec",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1063,
        "actionDescription" : "Utilisateur",
        "actionName" : "Utilisateur",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1064,
        "actionDescription" : "Recherche Utilisateur",
        "actionName" : "Recherche Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1064",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1065,
        "actionDescription" : "Consultation Utilisateur",
        "actionName" : "Consultation Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1065",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1066,
        "actionDescription" : "Ajout Utilisateur",
        "actionName" : "Ajout Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1066",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1088,
        "actionDescription" : "Ajout Role",
        "actionName" : "Ajout Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1088",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1089,
        "actionDescription" : "Edition Role",
        "actionName" : "Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1089",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1090,
        "actionDescription" : "Modification Role",
        "actionName" : "Modification Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1090",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1091,
        "actionDescription" : "Suppression Role",
        "actionName" : "Suppression Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1091",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1092,
        "actionDescription" : "Annuler edition Role",
        "actionName" : "Annuler Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1092",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1093,
        "actionDescription" : "Imprimer Role",
        "actionName" : "Imprimer Role",
        "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1093",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1095,
        "actionDescription" : "Unite Organisationnelle",
        "actionName" : "Unite Organisationnelle",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1096,
        "actionDescription" : "Recherche Unite Organisationnelle",
        "actionName" : "Recherche Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1096",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1097,
        "actionDescription" : "Consultation Unite Organisationnelle",
        "actionName" : "Consultation Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1097",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1098,
        "actionDescription" : "Ajout Unite Organisationnelle",
        "actionName" : "Ajout Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1098",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1099,
        "actionDescription" : "Edition Unite Organisationnelle",
        "actionName" : "Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1099",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1100,
        "actionDescription" : "Modification Unite Organisationnelle",
        "actionName" : "Modification Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1100",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1101,
        "actionDescription" : "Suppression Unite Organisationnelle",
        "actionName" : "Suppression Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1101",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1102,
        "actionDescription" : "Annuler edition Unite Organisationnelle",
        "actionName" : "Annuler Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1102",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1103,
        "actionDescription" : "Imprimer Unite Organisationnelle",
        "actionName" : "Imprimer Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1103",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 152,
      "codeRole" : "AR",
      "libelleRole" : "Armateur",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1088,
        "actionDescription" : "Ajout Role",
        "actionName" : "Ajout Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1088",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1089,
        "actionDescription" : "Edition Role",
        "actionName" : "Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1089",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1090,
        "actionDescription" : "Modification Role",
        "actionName" : "Modification Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1090",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1091,
        "actionDescription" : "Suppression Role",
        "actionName" : "Suppression Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1091",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1092,
        "actionDescription" : "Annuler edition Role",
        "actionName" : "Annuler Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1092",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1093,
        "actionDescription" : "Imprimer Role",
        "actionName" : "Imprimer Role",
        "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1093",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 202,
      "codeRole" : "G",
      "libelleRole" : "Gérant",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1011,
        "actionDescription" : "Emploi",
        "actionName" : "Emploi",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1012,
        "actionDescription" : "Recherche Emploi",
        "actionName" : "Recherche Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1012",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1013,
        "actionDescription" : "Consultation Emploi",
        "actionName" : "Consultation Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1013",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1014,
        "actionDescription" : "Ajout Emploi",
        "actionName" : "Ajout Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1014",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1015,
        "actionDescription" : "Edition Emploi",
        "actionName" : "Edition Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1015",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1016,
        "actionDescription" : "Modification Emploi",
        "actionName" : "Modification Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1016",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1017,
        "actionDescription" : "Suppression Emploi",
        "actionName" : "Suppression Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1017",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1018,
        "actionDescription" : "Annuler edition Emploi",
        "actionName" : "Annuler Edition Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1018",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1019,
        "actionDescription" : "Imprimer Emploi",
        "actionName" : "Imprimer Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1019",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1027,
        "actionDescription" : "Suppression Formateur",
        "actionName" : "Suppression Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1027",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1052,
        "actionDescription" : "Type",
        "actionName" : "Type",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1053,
        "actionDescription" : "Recherche Type",
        "actionName" : "Recherche Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1053",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1054,
        "actionDescription" : "Consultation Type",
        "actionName" : "Consultation Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1054",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1055,
        "actionDescription" : "Ajout Type",
        "actionName" : "Ajout Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1055",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1056,
        "actionDescription" : "Edition Type",
        "actionName" : "Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1056",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1057,
        "actionDescription" : "Modification Type",
        "actionName" : "Modification Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1057",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1058,
        "actionDescription" : "Suppression Type",
        "actionName" : "Suppression Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1058",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1059,
        "actionDescription" : "Annuler edition Type",
        "actionName" : "Annuler Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1059",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1060,
        "actionDescription" : "Imprimer Type",
        "actionName" : "Imprimer Type",
        "actionClassName" : "awb.aida.test.metier.services.TypePrintUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1060",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1063,
        "actionDescription" : "Utilisateur",
        "actionName" : "Utilisateur",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1064,
        "actionDescription" : "Recherche Utilisateur",
        "actionName" : "Recherche Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1064",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1065,
        "actionDescription" : "Consultation Utilisateur",
        "actionName" : "Consultation Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1065",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1066,
        "actionDescription" : "Ajout Utilisateur",
        "actionName" : "Ajout Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1066",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1088,
        "actionDescription" : "Ajout Role",
        "actionName" : "Ajout Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1088",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1089,
        "actionDescription" : "Edition Role",
        "actionName" : "Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1089",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1090,
        "actionDescription" : "Modification Role",
        "actionName" : "Modification Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1090",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1091,
        "actionDescription" : "Suppression Role",
        "actionName" : "Suppression Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1091",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1092,
        "actionDescription" : "Annuler edition Role",
        "actionName" : "Annuler Edition Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1092",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1093,
        "actionDescription" : "Imprimer Role",
        "actionName" : "Imprimer Role",
        "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1093",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1095,
        "actionDescription" : "Unite Organisationnelle",
        "actionName" : "Unite Organisationnelle",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1096,
        "actionDescription" : "Recherche Unite Organisationnelle",
        "actionName" : "Recherche Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1096",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1097,
        "actionDescription" : "Consultation Unite Organisationnelle",
        "actionName" : "Consultation Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1097",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1098,
        "actionDescription" : "Ajout Unite Organisationnelle",
        "actionName" : "Ajout Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1098",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1099,
        "actionDescription" : "Edition Unite Organisationnelle",
        "actionName" : "Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1099",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1100,
        "actionDescription" : "Modification Unite Organisationnelle",
        "actionName" : "Modification Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1100",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1101,
        "actionDescription" : "Suppression Unite Organisationnelle",
        "actionName" : "Suppression Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1101",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1102,
        "actionDescription" : "Annuler edition Unite Organisationnelle",
        "actionName" : "Annuler Edition Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1102",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1103,
        "actionDescription" : "Imprimer Unite Organisationnelle",
        "actionName" : "Imprimer Unite Organisationnelle",
        "actionClassName" : "awb.aida.admin.metier.services.UorgPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "uorg",
        "timbre" : "1062/1095/1103",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1095,
            "actionDescription" : "Unite Organisationnelle",
            "actionName" : "Unite Organisationnelle",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "uorg",
            "timbre" : "1062/1095",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1177,
        "actionDescription" : "Module Custom Request",
        "actionName" : "Module Custom Request",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1177",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1178,
        "actionDescription" : "Select Request",
        "actionName" : "Select Request",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1177/1178",
        "voClassName" : "-",
        "actionLevel" : 2,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1177,
            "actionDescription" : "Module Custom Request",
            "actionName" : "Module Custom Request",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1177",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300000,
        "actionDescription" : "workflows",
        "actionName" : "Workflows",
        "actionClassName" : "",
        "moduleName" : "workflow",
        "sousModuleName" : "workflow",
        "timbre" : "300000",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 300001,
        "actionDescription" : "Project Workflow Project",
        "actionName" : "Project Workflow Project",
        "actionClassName" : "",
        "moduleName" : "Workflow Project",
        "sousModuleName" : "Workflow Project",
        "timbre" : "300000/300001",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300000,
            "actionDescription" : "workflows",
            "actionName" : "Workflows",
            "actionClassName" : "",
            "moduleName" : "workflow",
            "sousModuleName" : "workflow",
            "timbre" : "300000",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300002,
        "actionDescription" : "valider Project Workflow Project",
        "actionName" : "valider Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300002",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300003,
        "actionDescription" : "rejeter Project Workflow Project",
        "actionName" : "rejeter Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300003",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 252,
      "codeRole" : "R",
      "libelleRole" : "Role",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1027,
        "actionDescription" : "Suppression Formateur",
        "actionName" : "Suppression Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1027",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 253,
      "codeRole" : "O",
      "libelleRole" : "Ouvrier",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1027,
        "actionDescription" : "Suppression Formateur",
        "actionName" : "Suppression Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1027",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1063,
        "actionDescription" : "Utilisateur",
        "actionName" : "Utilisateur",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1064,
        "actionDescription" : "Recherche Utilisateur",
        "actionName" : "Recherche Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1064",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1065,
        "actionDescription" : "Consultation Utilisateur",
        "actionName" : "Consultation Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1065",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1066,
        "actionDescription" : "Ajout Utilisateur",
        "actionName" : "Ajout Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1066",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1067,
        "actionDescription" : "Edition Utilisateur",
        "actionName" : "Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1067",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1068,
        "actionDescription" : "Modification Utilisateur",
        "actionName" : "Modification Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1068",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1069,
        "actionDescription" : "Suppression Utilisateur",
        "actionName" : "Suppression Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1069",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1070,
        "actionDescription" : "Annuler edition Utilisateur",
        "actionName" : "Annuler Edition Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1070",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1071,
        "actionDescription" : "Imprimer Utilisateur",
        "actionName" : "Imprimer Utilisateur",
        "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
        "moduleName" : "admin",
        "sousModuleName" : "utilisateur",
        "timbre" : "1062/1063/1071",
        "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1063,
            "actionDescription" : "Utilisateur",
            "actionName" : "Utilisateur",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "utilisateur",
            "timbre" : "1062/1063",
            "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 300000,
        "actionDescription" : "workflows",
        "actionName" : "Workflows",
        "actionClassName" : "",
        "moduleName" : "workflow",
        "sousModuleName" : "workflow",
        "timbre" : "300000",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 300001,
        "actionDescription" : "Project Workflow Project",
        "actionName" : "Project Workflow Project",
        "actionClassName" : "",
        "moduleName" : "Workflow Project",
        "sousModuleName" : "Workflow Project",
        "timbre" : "300000/300001",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300000,
            "actionDescription" : "workflows",
            "actionName" : "Workflows",
            "actionClassName" : "",
            "moduleName" : "workflow",
            "sousModuleName" : "workflow",
            "timbre" : "300000",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 300002,
        "actionDescription" : "valider Project Workflow Project",
        "actionName" : "valider Project Workflow Project",
        "actionClassName" : "awb.aida.server.test.metier.modele.Project",
        "moduleName" : "   ",
        "sousModuleName" : "   ",
        "timbre" : "300000/300001/300002",
        "voClassName" : "  ",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 300001,
            "actionDescription" : "Project Workflow Project",
            "actionName" : "Project Workflow Project",
            "actionClassName" : "",
            "moduleName" : "Workflow Project",
            "sousModuleName" : "Workflow Project",
            "timbre" : "300000/300001",
            "voClassName" : "  ",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 300000,
                "actionDescription" : "workflows",
                "actionName" : "Workflows",
                "actionClassName" : "",
                "moduleName" : "workflow",
                "sousModuleName" : "workflow",
                "timbre" : "300000",
                "voClassName" : "  ",
                "actionLevel" : null,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 302,
      "codeRole" : "M",
      "libelleRole" : "Manutentier",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1001,
        "actionDescription" : "Changement",
        "actionName" : "Changement",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1002,
        "actionDescription" : "Recherche Changement",
        "actionName" : "Recherche Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1002",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1003,
        "actionDescription" : "Consultation Changement",
        "actionName" : "Consultation Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1003",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1004,
        "actionDescription" : "Ajout Changement",
        "actionName" : "Ajout Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1004",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1005,
        "actionDescription" : "Edition Changement",
        "actionName" : "Edition Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1005",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1006,
        "actionDescription" : "Modification Changement",
        "actionName" : "Modification Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1006",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1007,
        "actionDescription" : "Suppression Changement",
        "actionName" : "Suppression Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1007",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1008,
        "actionDescription" : "Annuler edition Changement",
        "actionName" : "Annuler Edition Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1008",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1009,
        "actionDescription" : "Imprimer Changement",
        "actionName" : "Imprimer Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1009",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1041,
        "actionDescription" : "Project",
        "actionName" : "Project",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1042,
        "actionDescription" : "Recherche Project",
        "actionName" : "Recherche Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1042",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1043,
        "actionDescription" : "Consultation Project",
        "actionName" : "Consultation Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1043",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1044,
        "actionDescription" : "Ajout Project",
        "actionName" : "Ajout Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1044",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1045,
        "actionDescription" : "Edition Project",
        "actionName" : "Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1045",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1046,
        "actionDescription" : "Modification Project",
        "actionName" : "Modification Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1046",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1047,
        "actionDescription" : "Suppression Project",
        "actionName" : "Suppression Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1047",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1048,
        "actionDescription" : "Annuler edition Project",
        "actionName" : "Annuler Edition Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1048",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1049,
        "actionDescription" : "Imprimer Project",
        "actionName" : "Imprimer Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1049",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1051,
        "actionDescription" : "Afficher Version Project",
        "actionName" : "Afficher Version Project",
        "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
        "moduleName" : "test",
        "sousModuleName" : "project",
        "timbre" : "1000/1041/1051",
        "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1041,
            "actionDescription" : "Project",
            "actionName" : "Project",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "project",
            "timbre" : "1000/1041",
            "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1052,
        "actionDescription" : "Type",
        "actionName" : "Type",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1053,
        "actionDescription" : "Recherche Type",
        "actionName" : "Recherche Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1053",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1054,
        "actionDescription" : "Consultation Type",
        "actionName" : "Consultation Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1054",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1055,
        "actionDescription" : "Ajout Type",
        "actionName" : "Ajout Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1055",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1056,
        "actionDescription" : "Edition Type",
        "actionName" : "Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1056",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1057,
        "actionDescription" : "Modification Type",
        "actionName" : "Modification Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1057",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1058,
        "actionDescription" : "Suppression Type",
        "actionName" : "Suppression Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1058",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1059,
        "actionDescription" : "Annuler edition Type",
        "actionName" : "Annuler Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1059",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1060,
        "actionDescription" : "Imprimer Type",
        "actionName" : "Imprimer Type",
        "actionClassName" : "awb.aida.test.metier.services.TypePrintUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1060",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }, {
      "id" : 352,
      "codeRole" : "L",
      "libelleRole" : "Livreur",
      "refsFkAction" : [{
        "id" : 1000,
        "actionDescription" : "Module Test",
        "actionName" : "Module Test",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1000",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1001,
        "actionDescription" : "Changement",
        "actionName" : "Changement",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1002,
        "actionDescription" : "Recherche Changement",
        "actionName" : "Recherche Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1002",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1003,
        "actionDescription" : "Consultation Changement",
        "actionName" : "Consultation Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1003",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1004,
        "actionDescription" : "Ajout Changement",
        "actionName" : "Ajout Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1004",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1005,
        "actionDescription" : "Edition Changement",
        "actionName" : "Edition Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1005",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1006,
        "actionDescription" : "Modification Changement",
        "actionName" : "Modification Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1006",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1007,
        "actionDescription" : "Suppression Changement",
        "actionName" : "Suppression Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1007",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1008,
        "actionDescription" : "Annuler edition Changement",
        "actionName" : "Annuler Edition Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1008",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1009,
        "actionDescription" : "Imprimer Changement",
        "actionName" : "Imprimer Changement",
        "actionClassName" : "awb.aida.test.metier.services.ChangementPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "changement",
        "timbre" : "1000/1001/1009",
        "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1001,
            "actionDescription" : "Changement",
            "actionName" : "Changement",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "changement",
            "timbre" : "1000/1001",
            "voClassName" : "awb.aida.test.metier.valueobjects.ChangementVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1011,
        "actionDescription" : "Emploi",
        "actionName" : "Emploi",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1012,
        "actionDescription" : "Recherche Emploi",
        "actionName" : "Recherche Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1012",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1013,
        "actionDescription" : "Consultation Emploi",
        "actionName" : "Consultation Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1013",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1014,
        "actionDescription" : "Ajout Emploi",
        "actionName" : "Ajout Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1014",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1015,
        "actionDescription" : "Edition Emploi",
        "actionName" : "Edition Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1015",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1016,
        "actionDescription" : "Modification Emploi",
        "actionName" : "Modification Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1016",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1017,
        "actionDescription" : "Suppression Emploi",
        "actionName" : "Suppression Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1017",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1018,
        "actionDescription" : "Annuler edition Emploi",
        "actionName" : "Annuler Edition Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1018",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1019,
        "actionDescription" : "Imprimer Emploi",
        "actionName" : "Imprimer Emploi",
        "actionClassName" : "awb.aida.test.metier.services.EmploiPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "emploi",
        "timbre" : "1000/1011/1019",
        "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1011,
            "actionDescription" : "Emploi",
            "actionName" : "Emploi",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "emploi",
            "timbre" : "1000/1011",
            "voClassName" : "awb.aida.test.metier.valueobjects.EmploiVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1021,
        "actionDescription" : "Formateur",
        "actionName" : "Formateur",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1022,
        "actionDescription" : "Recherche Formateur",
        "actionName" : "Recherche Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1022",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1023,
        "actionDescription" : "Consultation Formateur",
        "actionName" : "Consultation Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1023",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1024,
        "actionDescription" : "Ajout Formateur",
        "actionName" : "Ajout Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1024",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1025,
        "actionDescription" : "Edition Formateur",
        "actionName" : "Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1025",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1026,
        "actionDescription" : "Modification Formateur",
        "actionName" : "Modification Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1026",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1027,
        "actionDescription" : "Suppression Formateur",
        "actionName" : "Suppression Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1027",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1028,
        "actionDescription" : "Annuler edition Formateur",
        "actionName" : "Annuler Edition Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1028",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1029,
        "actionDescription" : "Imprimer Formateur",
        "actionName" : "Imprimer Formateur",
        "actionClassName" : "awb.aida.test.metier.services.FormateurPrintUC",
        "moduleName" : "test",
        "sousModuleName" : "formateur",
        "timbre" : "1000/1021/1029",
        "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1021,
            "actionDescription" : "Formateur",
            "actionName" : "Formateur",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "formateur",
            "timbre" : "1000/1021",
            "voClassName" : "awb.aida.test.metier.valueobjects.FormateurVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1052,
        "actionDescription" : "Type",
        "actionName" : "Type",
        "actionClassName" : "",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1000,
            "actionDescription" : "Module Test",
            "actionName" : "Module Test",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1000",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1053,
        "actionDescription" : "Recherche Type",
        "actionName" : "Recherche Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeRechercherUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1053",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1054,
        "actionDescription" : "Consultation Type",
        "actionName" : "Consultation Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeConsulterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1054",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1055,
        "actionDescription" : "Ajout Type",
        "actionName" : "Ajout Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAjouterUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1055",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1056,
        "actionDescription" : "Edition Type",
        "actionName" : "Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeEditerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1056",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1057,
        "actionDescription" : "Modification Type",
        "actionName" : "Modification Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeModifierUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1057",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1058,
        "actionDescription" : "Suppression Type",
        "actionName" : "Suppression Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeSupprimerUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1058",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1059,
        "actionDescription" : "Annuler edition Type",
        "actionName" : "Annuler Edition Type",
        "actionClassName" : "awb.aida.test.metier.services.TypeAnnulerEditionUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1059",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1060,
        "actionDescription" : "Imprimer Type",
        "actionName" : "Imprimer Type",
        "actionClassName" : "awb.aida.test.metier.services.TypePrintUC",
        "moduleName" : "test",
        "sousModuleName" : "type",
        "timbre" : "1000/1052/1060",
        "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1052,
            "actionDescription" : "Type",
            "actionName" : "Type",
            "actionClassName" : "",
            "moduleName" : "test",
            "sousModuleName" : "type",
            "timbre" : "1000/1052",
            "voClassName" : "awb.aida.test.metier.valueobjects.TypeVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1000,
                "actionDescription" : "Module Test",
                "actionName" : "Module Test",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1000",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1062,
        "actionDescription" : "Module Admin",
        "actionName" : "Module Admin",
        "actionClassName" : "-",
        "moduleName" : "aida",
        "sousModuleName" : "aida",
        "timbre" : "1062",
        "voClassName" : "-",
        "actionLevel" : 1,
        "traceToken" : null,
        "refActionParent" : null
      }, {
        "id" : 1085,
        "actionDescription" : "Role",
        "actionName" : "Role",
        "actionClassName" : "",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1062,
            "actionDescription" : "Module Admin",
            "actionName" : "Module Admin",
            "actionClassName" : "-",
            "moduleName" : "aida",
            "sousModuleName" : "aida",
            "timbre" : "1062",
            "voClassName" : "-",
            "actionLevel" : 1,
            "traceToken" : null,
            "refActionParent" : null
          }
        }
      }, {
        "id" : 1086,
        "actionDescription" : "Recherche Role",
        "actionName" : "Recherche Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1086",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }, {
        "id" : 1087,
        "actionDescription" : "Consultation Role",
        "actionName" : "Consultation Role",
        "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
        "moduleName" : "admin",
        "sousModuleName" : "role",
        "timbre" : "1062/1085/1087",
        "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
        "actionLevel" : null,
        "traceToken" : null,
        "refActionParent" : {
          "Action" : {
            "id" : 1085,
            "actionDescription" : "Role",
            "actionName" : "Role",
            "actionClassName" : "",
            "moduleName" : "admin",
            "sousModuleName" : "role",
            "timbre" : "1062/1085",
            "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
            "actionLevel" : null,
            "traceToken" : null,
            "refActionParent" : {
              "Action" : {
                "id" : 1062,
                "actionDescription" : "Module Admin",
                "actionName" : "Module Admin",
                "actionClassName" : "-",
                "moduleName" : "aida",
                "sousModuleName" : "aida",
                "timbre" : "1062",
                "voClassName" : "-",
                "actionLevel" : 1,
                "traceToken" : null,
                "refActionParent" : null
              }
            }
          }
        }
      }]
    }],
    "count" : 12,
    "misc" : null
  });
};

exports.fetchOne = function(req, res) {
  res.status(200).json({
    "object" : {
      "id" : 2,
      "codeRole" : "AG",
      "libelleRole" : "Agent",
      "refsFkAction" : [
        {
          "id" : 1000,
          "actionDescription" : "Module Test",
          "actionName" : "Module Test",
          "actionClassName" : "-",
          "moduleName" : "aida",
          "sousModuleName" : "aida",
          "timbre" : "1000",
          "voClassName" : "-",
          "actionLevel" : 1,
          "traceToken" : null,
          "refActionParent" : null
        }, {
          "id" : 1041,
          "actionDescription" : "Project",
          "actionName" : "Project",
          "actionClassName" : "",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1000,
              "actionDescription" : "Module Test",
              "actionName" : "Module Test",
              "actionClassName" : "-",
              "moduleName" : "aida",
              "sousModuleName" : "aida",
              "timbre" : "1000",
              "voClassName" : "-",
              "actionLevel" : 1,
              "traceToken" : null,
              "refActionParent" : null
            }
          }
        }, {
          "id" : 1042,
          "actionDescription" : "Recherche Project",
          "actionName" : "Recherche Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectRechercherUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1042",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1043,
          "actionDescription" : "Consultation Project",
          "actionName" : "Consultation Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectConsulterUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1043",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1044,
          "actionDescription" : "Ajout Project",
          "actionName" : "Ajout Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectAjouterUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1044",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1045,
          "actionDescription" : "Edition Project",
          "actionName" : "Edition Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectEditerUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1045",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1046,
          "actionDescription" : "Modification Project",
          "actionName" : "Modification Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectModifierUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1046",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1047,
          "actionDescription" : "Suppression Project",
          "actionName" : "Suppression Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectSupprimerUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1047",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1048,
          "actionDescription" : "Annuler edition Project",
          "actionName" : "Annuler Edition Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectAnnulerEditionUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1048",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1049,
          "actionDescription" : "Imprimer Project",
          "actionName" : "Imprimer Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectPrintUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1049",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1051,
          "actionDescription" : "Afficher Version Project",
          "actionName" : "Afficher Version Project",
          "actionClassName" : "awb.aida.test.metier.services.ProjectAfficherVersionUC",
          "moduleName" : "test",
          "sousModuleName" : "project",
          "timbre" : "1000/1041/1051",
          "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1041,
              "actionDescription" : "Project",
              "actionName" : "Project",
              "actionClassName" : "",
              "moduleName" : "test",
              "sousModuleName" : "project",
              "timbre" : "1000/1041",
              "voClassName" : "awb.aida.test.metier.valueobjects.ProjectVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1000,
                  "actionDescription" : "Module Test",
                  "actionName" : "Module Test",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1000",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1062,
          "actionDescription" : "Module Admin",
          "actionName" : "Module Admin",
          "actionClassName" : "-",
          "moduleName" : "aida",
          "sousModuleName" : "aida",
          "timbre" : "1062",
          "voClassName" : "-",
          "actionLevel" : 1,
          "traceToken" : null,
          "refActionParent" : null
        }, {
          "id" : 1063,
          "actionDescription" : "Utilisateur",
          "actionName" : "Utilisateur",
          "actionClassName" : "",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1062,
              "actionDescription" : "Module Admin",
              "actionName" : "Module Admin",
              "actionClassName" : "-",
              "moduleName" : "aida",
              "sousModuleName" : "aida",
              "timbre" : "1062",
              "voClassName" : "-",
              "actionLevel" : 1,
              "traceToken" : null,
              "refActionParent" : null
            }
          }
        }, {
          "id" : 1064,
          "actionDescription" : "Recherche Utilisateur",
          "actionName" : "Recherche Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurRechercherUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1064",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1065,
          "actionDescription" : "Consultation Utilisateur",
          "actionName" : "Consultation Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurConsulterUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1065",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1066,
          "actionDescription" : "Ajout Utilisateur",
          "actionName" : "Ajout Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAjouterUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1066",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1067,
          "actionDescription" : "Edition Utilisateur",
          "actionName" : "Edition Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurEditerUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1067",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1068,
          "actionDescription" : "Modification Utilisateur",
          "actionName" : "Modification Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurModifierUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1068",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1069,
          "actionDescription" : "Suppression Utilisateur",
          "actionName" : "Suppression Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurSupprimerUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1069",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1070,
          "actionDescription" : "Annuler edition Utilisateur",
          "actionName" : "Annuler Edition Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurAnnulerEditionUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1070",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1071,
          "actionDescription" : "Imprimer Utilisateur",
          "actionName" : "Imprimer Utilisateur",
          "actionClassName" : "awb.aida.admin.metier.services.UtilisateurPrintUC",
          "moduleName" : "admin",
          "sousModuleName" : "utilisateur",
          "timbre" : "1062/1063/1071",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1063,
              "actionDescription" : "Utilisateur",
              "actionName" : "Utilisateur",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "utilisateur",
              "timbre" : "1062/1063",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UtilisateurVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1085,
          "actionDescription" : "Role",
          "actionName" : "Role",
          "actionClassName" : "",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1062,
              "actionDescription" : "Module Admin",
              "actionName" : "Module Admin",
              "actionClassName" : "-",
              "moduleName" : "aida",
              "sousModuleName" : "aida",
              "timbre" : "1062",
              "voClassName" : "-",
              "actionLevel" : 1,
              "traceToken" : null,
              "refActionParent" : null
            }
          }
        }, {
          "id" : 1086,
          "actionDescription" : "Recherche Role",
          "actionName" : "Recherche Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleRechercherUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1086",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1087,
          "actionDescription" : "Consultation Role",
          "actionName" : "Consultation Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleConsulterUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1087",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1088,
          "actionDescription" : "Ajout Role",
          "actionName" : "Ajout Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleAjouterUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1088",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1089,
          "actionDescription" : "Edition Role",
          "actionName" : "Edition Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleEditerUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1089",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1090,
          "actionDescription" : "Modification Role",
          "actionName" : "Modification Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleModifierUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1090",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1091,
          "actionDescription" : "Suppression Role",
          "actionName" : "Suppression Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleSupprimerUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1091",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1092,
          "actionDescription" : "Annuler edition Role",
          "actionName" : "Annuler Edition Role",
          "actionClassName" : "awb.aida.admin.metier.services.RoleAnnulerEditionUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1092",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1093,
          "actionDescription" : "Imprimer Role",
          "actionName" : "Imprimer Role",
          "actionClassName" : "awb.aida.admin.metier.services.RolePrintUC",
          "moduleName" : "admin",
          "sousModuleName" : "role",
          "timbre" : "1062/1085/1093",
          "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1085,
              "actionDescription" : "Role",
              "actionName" : "Role",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "role",
              "timbre" : "1062/1085",
              "voClassName" : "awb.aida.admin.metier.valueobjects.RoleVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1095,
          "actionDescription" : "Unite Organisationnelle",
          "actionName" : "Unite Organisationnelle",
          "actionClassName" : "",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1062,
              "actionDescription" : "Module Admin",
              "actionName" : "Module Admin",
              "actionClassName" : "-",
              "moduleName" : "aida",
              "sousModuleName" : "aida",
              "timbre" : "1062",
              "voClassName" : "-",
              "actionLevel" : 1,
              "traceToken" : null,
              "refActionParent" : null
            }
          }
        }, {
          "id" : 1096,
          "actionDescription" : "Recherche Unite Organisationnelle",
          "actionName" : "Recherche Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgRechercherUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1096",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1097,
          "actionDescription" : "Consultation Unite Organisationnelle",
          "actionName" : "Consultation Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgConsulterUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1097",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1098,
          "actionDescription" : "Ajout Unite Organisationnelle",
          "actionName" : "Ajout Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgAjouterUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1098",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1099,
          "actionDescription" : "Edition Unite Organisationnelle",
          "actionName" : "Edition Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgEditerUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1099",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1100,
          "actionDescription" : "Modification Unite Organisationnelle",
          "actionName" : "Modification Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgModifierUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1100",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1101,
          "actionDescription" : "Suppression Unite Organisationnelle",
          "actionName" : "Suppression Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgSupprimerUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1101",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1102,
          "actionDescription" : "Annuler edition Unite Organisationnelle",
          "actionName" : "Annuler Edition Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgAnnulerEditionUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1102",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 1103,
          "actionDescription" : "Imprimer Unite Organisationnelle",
          "actionName" : "Imprimer Unite Organisationnelle",
          "actionClassName" : "awb.aida.admin.metier.services.UorgPrintUC",
          "moduleName" : "admin",
          "sousModuleName" : "uorg",
          "timbre" : "1062/1095/1103",
          "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 1095,
              "actionDescription" : "Unite Organisationnelle",
              "actionName" : "Unite Organisationnelle",
              "actionClassName" : "",
              "moduleName" : "admin",
              "sousModuleName" : "uorg",
              "timbre" : "1062/1095",
              "voClassName" : "awb.aida.admin.metier.valueobjects.UorgVO",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 1062,
                  "actionDescription" : "Module Admin",
                  "actionName" : "Module Admin",
                  "actionClassName" : "-",
                  "moduleName" : "aida",
                  "sousModuleName" : "aida",
                  "timbre" : "1062",
                  "voClassName" : "-",
                  "actionLevel" : 1,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }, {
          "id" : 300000,
          "actionDescription" : "workflows",
          "actionName" : "Workflows",
          "actionClassName" : "",
          "moduleName" : "workflow",
          "sousModuleName" : "workflow",
          "timbre" : "300000",
          "voClassName" : "  ",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : null
        }, {
          "id" : 300001,
          "actionDescription" : "Project Workflow Project",
          "actionName" : "Project Workflow Project",
          "actionClassName" : "",
          "moduleName" : "Workflow Project",
          "sousModuleName" : "Workflow Project",
          "timbre" : "300000/300001",
          "voClassName" : "  ",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 300000,
              "actionDescription" : "workflows",
              "actionName" : "Workflows",
              "actionClassName" : "",
              "moduleName" : "workflow",
              "sousModuleName" : "workflow",
              "timbre" : "300000",
              "voClassName" : "  ",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : null
            }
          }
        }, {
          "id" : 300002,
          "actionDescription" : "valider Project Workflow Project",
          "actionName" : "valider Project Workflow Project",
          "actionClassName" : "awb.aida.server.test.metier.modele.Project",
          "moduleName" : "   ",
          "sousModuleName" : "   ",
          "timbre" : "300000/300001/300002",
          "voClassName" : "  ",
          "actionLevel" : null,
          "traceToken" : null,
          "refActionParent" : {
            "Action" : {
              "id" : 300001,
              "actionDescription" : "Project Workflow Project",
              "actionName" : "Project Workflow Project",
              "actionClassName" : "",
              "moduleName" : "Workflow Project",
              "sousModuleName" : "Workflow Project",
              "timbre" : "300000/300001",
              "voClassName" : "  ",
              "actionLevel" : null,
              "traceToken" : null,
              "refActionParent" : {
                "Action" : {
                  "id" : 300000,
                  "actionDescription" : "workflows",
                  "actionName" : "Workflows",
                  "actionClassName" : "",
                  "moduleName" : "workflow",
                  "sousModuleName" : "workflow",
                  "timbre" : "300000",
                  "voClassName" : "  ",
                  "actionLevel" : null,
                  "traceToken" : null,
                  "refActionParent" : null
                }
              }
            }
          }
        }]
    }, "status" : 0, "message" : null, "listItems" : null, "count" : null, "misc" : null
  });
};