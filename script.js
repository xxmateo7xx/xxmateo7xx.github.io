function inicjalizujMenu()
{
    const przyciskMobilny = document.getElementById('przycisk-menu-mobilne');
    const menuGlowne = document.getElementById('menu-glowne');

    if (przyciskMobilny && menuGlowne)
    {
        przyciskMobilny.addEventListener('click', function()
        {
            przelaczWidocznoscMenu(menuGlowne);
        });
    }
}

function przelaczWidocznoscMenu(elementMenu)
{
    if (elementMenu.style.display === 'flex')
    {
        elementMenu.style.display = 'none';
    }
    else
    {
        elementMenu.style.display = 'flex';
        elementMenu.style.flexDirection = 'column';
        elementMenu.style.position = 'absolute';
        elementMenu.style.top = '70px';
        elementMenu.style.right = '20px';
        elementMenu.style.backgroundColor = '#fff';
        elementMenu.style.padding = '1rem';
        elementMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
}


document.addEventListener('DOMContentLoaded', inicjalizujMenu);