

<div style="font-family: Arial, Verdana, sans-serif; font-size: 14px;">

      <p>Sehr geehrte/r
      % if object.partner_id.gender == 'male':
      Sehr geehrter Herr
      % elif object.partner_id.gender == 'female':
      Sehr geehrte Frau
      % elif object.partner_id.gender == 'other' or '':
      'Hallo '
      % endif
      ${object.partner_id.titel_web or ''} ${object.partner_id.firstname or ''} ${object.partner_id.lastname or ''},
      </p><br>

    <h3><br>Ihre persönlichen Daten</h3>
    <p>
        % if object.partner_id.name:
            ${object.partner_id.name}<br>
        % endif
        % if object.partner_id.street:
            ${object.partner_id.street}<br>
        % endif
        % if object.partner_id.street2:
            ${object.partner_id.street2}<br>
        % endif
        % if object.partner_id.city or object.partner_id.zip:
            ${object.partner_id.zip} ${object.partner_id.city}<br>
        % endif
        % if object.partner_id.email:
            E-Mail.:&nbsp;<a href="mailto:${object.partner_id.email}">${object.partner_id.email}</a><br>
        % endif

     </p>
    <h3><br>Vorgangsübersicht:</h3>
    <p style="padding-left: 14px;">
        Vorgangsnummer: <strong>${object.name}</strong><br>
        Vorgangssumme: ${object.amount_total}&nbsp;${object.pricelist_id.currency_id.name}<br>
        Vorgangsdatum: ${object.date_order}<br>
        Zahlungsstatus: <strong style="text-transform:uppercase;">
          % if object.payment_tx_id.state == 'cancel':
            abgebrochen
          % elif object.payment_tx_id.state == 'draft' or '' or 'pending':
            in Bearbeitung
          % elif object.payment_tx_id.state == 'done':
            in Bearbeitung
          % endif
          </strong>
    </p>

        <p>Bei Fragen kontaktieren Sie bitte:</p>
            <a href="mailto:office@wienertafel.at" style="display:block; padding-left: 14px;">${(object.company_id.email or '') | safe}</a><br>

    <h3>
        <strong>${object.company_id.name}</strong>
    </h3>
    <p>
        % if object.company_id.street:
            ${object.company_id.street}<br>
        % endif
        % if object.company_id.street2:
            ${object.company_id.street2}<br>
        % endif
        % if object.company_id.city or object.company_id.zip:
            ${object.company_id.zip} ${object.company_id.city}<br>
        % endif
        % if object.company_id.country_id:
            ${object.company_id.state_id and ('%s, ' % object.company_id.state_id.name) or ''} ${object.company_id.country_id.name or ''}<br>
        % endif
        % if object.company_id.phone:
            Tel.:&nbsp;${object.company_id.phone}<br>
        % endif
        % if object.company_id.email:
            E-Mail.:&nbsp;<a href="mailto:${object.company_id.email}">${object.company_id.email}</a><br>
        % endif
        % if object.company_id.website:
            Web.:&nbsp;<a href="${object.company_id.website}">${object.company_id.website}</a><br>
        % endif
        % if object.company_id.logo:
            </p><div style="padding:0; margin:0;"><img src="data:image/png;base64,${object.company_id.logo}" style="width: 120px;"></div>
        % endif
    <p></p>

</div>

