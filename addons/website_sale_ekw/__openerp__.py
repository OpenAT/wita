# -*- coding: utf-8 -*-
##############################################################################
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>
#
##############################################################################

{
    'name': 'website_sale_ekw',
    'summary': """website_sale_ekw""",
    'description': """
grid for the /shop pages
    """,
    'author': 'Joachim Grubelnik (joachim.grueblnik@datadialog.net), DataDialog',
    'version': '1.1',
    'website': 'https://www.datadialog.net',
    'installable': True,
    'depends': [
        'website_sale_donate',
        'website_sale_categories',
    ],
    'data': [
        'views/templates.xml',
    ],
}
