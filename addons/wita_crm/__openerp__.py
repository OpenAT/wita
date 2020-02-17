# -*- coding: utf-8 -*-

{
    'name': 'wita_crm',
    'summary': '''FS-Online CRM für Wiener Tafeln''',
    'description': '''
FS-Online CRM für Wiener Tafeln
===============================

CRM settings for the instance wita

- New WITA user groups for res.partner access
- View modifications for res.partner search
- Translations
    ''',
    'author': 'Michael Karrer (michael.karrer@datadialog.net), DataDialog',
    'version': '1.0',
    'website': 'https://www.datadialog.net',
    'installable': True,
    'depends': [
        'wita_config',
        'fsonline',
    ],
    'data': [
        'data/wita_user_groups.xml',
        'security/ir.model.access.csv',
        'views/webclient.xml',
        'views/res_partner.xml',
    ],
}
